"use strict";

window.FlowerPotRender = function(gl, program, model, Matrix){
    const self = this;

    let flowerPot_vertex_buffer_id = null;
    let flowerPot_index_buffer_id = null;
    let a_Vertex_location = null;
    let u_Color_location = null;

    function _createBufferObject(gl, data) {
        // Create a buffer object
        const buffer_id = gl.createBuffer();

        if (!buffer_id) {
          out.displayError('Failed to create the buffer object for ' + model.name);
          return null;
        }
    
        // Make the buffer object the active buffer.
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer_id);
    
        // Upload the data for this buffer object to the GPU.
        gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    
        return buffer_id;
    }

    function _createElArrBufferObject(gl, data) {
            // Create a buffer object
            const buffer_id = gl.createBuffer();
    
            if (!buffer_id) {
              out.displayError('Failed to create the buffer object for ' + model.name);
              return null;
            }
        
            // Make the buffer object the active buffer.
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer_id);
        
            // Upload the data for this buffer object to the GPU.
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, gl.STATIC_DRAW);
        
            return buffer_id;
    }

    function _buildBufferObjectData() {
        //create new buffer object
        flowerPot_vertex_buffer_id = _createBufferObject(gl, new Float32Array(model.vertices));
        flowerPot_index_buffer_id = _createElArrBufferObject(gl, new Uint16Array(model.indices));

    }

    function _getLocationOfShaderVariables() {
        a_Vertex_location = gl.getAttribLocation(program,  'vertexPosition');
        u_Color_location  = gl.getUniformLocation(program, 'u_Color');
    }

    // These one-time tasks set up the rendering of the models.
    _buildBufferObjectData();
    _getLocationOfShaderVariables();

    self.render = function (gl) {

        gl.useProgram(program);
    
        // Activate the model's vertex Buffer Object
        gl.bindBuffer(gl.ARRAY_BUFFER, flowerPot_vertex_buffer_id);
    
        // Bind the vertices Buffer Object to the 'a_Vertex' shader variable
        gl.vertexAttribPointer(a_Vertex_location, 3, gl.FLOAT, gl.FALSE, 3 * Float32Array.BYTES_PER_ELEMENT, 0);
        gl.enableVertexAttribArray(a_Vertex_location);

        //get the locations of the matrices in the shader vectors
        const matModelUniformLocation = gl.getUniformLocation(program, 'mWorld');
        const matViewUniformLocation = gl.getUniformLocation(program, 'mView'); //have not actually learned at this
        const matProfUniformLocation = gl.getUniformLocation(program, 'mProj'); //have not actually learned about this

        //intiailize empty 1d representations of 4x4 matrices of different transforms
        let modelMatrix = Matrix.create();
        let viewMatrix = Matrix.create();
        let projMatrix = Matrix.create();

        //set all three matrices to the identity matrix
        Matrix.setIdentity(modelMatrix);

        Matrix.lookAt(viewMatrix,0,0,0.5,0,0,0,0,1,0);
        projMatrix = Matrix.createOrthographic(-2,2,-2,2,-2,2);
        
        //link to the shader variables mWorld, mView, and mProj
        gl.uniformMatrix4fv(matModelUniformLocation, gl.FALSE, modelMatrix);
	    gl.uniformMatrix4fv(matViewUniformLocation, gl.FALSE, viewMatrix);
        gl.uniformMatrix4fv(matProfUniformLocation, gl.FALSE, projMatrix);
        
        // Set the color for all of the triangle faces
        gl.uniform4fv(u_Color_location, model.color);

        //create identity matrix
        let identity_Matrix = Matrix.create();
        Matrix.setIdentity(identity_Matrix);

        //create roation matrix around y axis
        let YRotationMatrix = Matrix.create();
        let TranslationMatrix = Matrix.create();

        let rotationAngle = 0; //angle that we will use to rotate
        let translationAngle = 0;
        let animationLoop = function(){

            gl.clearColor(0.1, 0.7, 0.8, 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT, gl.DEPTH_BUFFER_BIT);

            rotationAngle = rotationAngle + 0.7;
            Matrix.rotate(modelMatrix,rotationAngle, 0.5, 1, 1);
            
            gl.uniformMatrix4fv(matModelUniformLocation, gl.FALSE, modelMatrix);

            // Draw all of the triangles
            gl.drawElements(gl.TRIANGLES, model.indices.length, gl.UNSIGNED_SHORT, 0);
            window.requestAnimationFrame(animationLoop);

        }
       
        window.requestAnimationFrame(animationLoop);
    
    };


}