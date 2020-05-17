"use strict";

//Takes the the current contex
window.triangleRender = function(gl, program, model){
    const self = this;

    //Declares empty buffer objects for vertex and color. 
    //Declares empty variables to store the location of the vertex/fragment shader variables.
    let triangle_vertex_buffer_id = null;
    let triangles_color_buffer_id = null;
    let a_Vertex_location = null;
    let a_Color_location = null;

    // Initializes and binds a new buffer object. Returns the id location reference of the object.
    function _createBufferObject(gl, data) {
        // Create a buffer object
        let buffer_id;
    
        buffer_id = gl.createBuffer();
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

    // Constructs triangle vertex and color buffer objects based on values passed in by model.
    function _buildBufferObjectData() {

        //3 vertices for each triangle
        const numVertices = 3;

        //the buffer object to hold the triangles vertices
        let vertices2 = new Float32Array(numVertices*2);
        let color3 = new Float32Array(numVertices*3);

        // Counter variables to keep track of vertices and color3
        let nv = 0;
        let nc = 0;

        // Load model values into buffer object
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 2; j++, nv++){
                vertices2[nv] = model.triangle.vertices[i][j];
            }

            for(let m = 0; m < 3; m++, nc++){
                color3[nc] = model.triangle.colors[i][m];
            }

        }

        // Create new buffer object
        triangle_vertex_buffer_id = _createBufferObject(gl, vertices2);
        triangles_color_buffer_id = _createBufferObject(gl, color3);

        // Set storage to null to conserve space
        vertices2 = null;
        color3 = null;
    }

    // Get the location of the shader variables.
    function _getLocationOfShaderVariables() {
        a_Color_location = gl.getAttribLocation(program, 'vertexColor');
        a_Vertex_location = gl.getAttribLocation(program,  'vertexPosition');
    }

    // These one-time tasks set up the rendering of the models.
    _buildBufferObjectData();
    _getLocationOfShaderVariables();

    // Delete buffer object data from the webGL Context.
    self.delete = function (gl) {
        if (number_triangles > 0) {
          gl.deleteBuffer(triangles_vertex_buffer_id);
        }
    };

    // Renders the buffer objects and sets up variables to feed into the Fragment shader.
    self.render = function (gl) {
        gl.useProgram(program);
    
        // Activate the model's vertex Buffer Object
        gl.bindBuffer(gl.ARRAY_BUFFER, triangle_vertex_buffer_id);
    
        // Bind the vertices Buffer Object to the 'a_Vertex' shader variable
        gl.vertexAttribPointer(a_Vertex_location, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(a_Vertex_location);

        // Activate the model's color Buffer Object
        gl.bindBuffer(gl.ARRAY_BUFFER, triangles_color_buffer_id);

        
        // Bind the color Buffer Object to the 'a_Color' shader variable
        gl.vertexAttribPointer(a_Color_location, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(a_Color_location);
    
        // Draw all of the triangles
        gl.drawArrays(gl.TRIANGLES, 0, 3);
    };


}