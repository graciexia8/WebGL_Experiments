"use strict";

window.initDemo = function(){

    //get the canvas going to be used and set the context of the canvas.
    let canvas = getCanvas("triangle");
    let gl = getWebglContext(canvas);

    //clear the gl background color_buffer_bit and set to the color values in clear color
    //clear the depth_buffer_bit
    gl.clearColor(1.0, 1.0, 0.6, 0.5);
    gl.clear(gl.COLOR_BUFFER_BIT, gl.DEPTH_BUFFER_BIT);

    //get vertex and fragment shader from html file
    //I've also written these in a separate file, but since js can't access locally with a webserver, this is the alt solution.
    const vertShaderSource = document.getElementById("vertex-shader").text;
    const fragShaderSource = document.getElementById("fragment-shader").text;

    //create shaders
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

    // Set the shaders.
    gl.shaderSource(vertexShader, vertShaderSource);
    gl.shaderSource(fragmentShader, fragShaderSource);

    // Compile the vertex shader, embedded in triangle.html.
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
		console.error('ERROR compiling fragment shader!', gl.getShaderInfoLog(vertexShader));
		return;
    }
    
    // Compile the fragment shared from in triangle.html
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
		console.error('ERROR compiling fragment shader!', gl.getShaderInfoLog(fragmentShader));
		return;
	}

  //create program
  const program = gl.createProgram();

  //attach shaders to the program
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);

  //link the program
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
		console.error('ERROR linking program!', gl.getProgramInfoLog(program));
		return;
  }
  
  //validate the program
	gl.validateProgram(program);
	if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
		console.error('ERROR validating program!', gl.getProgramInfoLog(program));
		return;
  }
    
  //create the Triangle model
  const model = CreateTriangle();

  //create new object to render triangle.
  const triangle =  new triangleRender(gl, program, model);

  // Render the triangle.
  triangle.render(gl);

}
