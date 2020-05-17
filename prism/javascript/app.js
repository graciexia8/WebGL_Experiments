"use strict";
window.initDemo = function(){

    const canvas = getCanvas("prism");
    const gl = getWebglContext(canvas);

    gl.clearColor(1.0, 1.0, 0.6, 0.5);
    gl.clear(gl.COLOR_BUFFER_BIT, gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);


    //get vertex and fragment shader from html file
    //I've also written these in a separate file, but since js can't access locally with a webserver, this is the alt solution.
    let vertShaderSource = document.getElementById("vertex-shader").text;
    let fragShaderSource = document.getElementById("fragment-shader").text;

    //create shaders
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

    //set the shaders
    gl.shaderSource(vertexShader, vertShaderSource);
    gl.shaderSource(fragmentShader, fragShaderSource);

    //compile the shaders
    //should have some assertion validation
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
		console.error('ERROR compiling fragment shader!', gl.getShaderInfoLog(vertexShader));
		return;
    }
    
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
  
	gl.validateProgram(program);
	if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
		console.error('ERROR validating program!', gl.getProgramInfoLog(program));
		return;
    }
    
    //create the buffer
    const model = CreatePrism();


    let Matrix = new Learn_webgl_matrix();
    const prism =  new PrismRender(gl, program, model, Matrix);
    

    prism.render(gl);

}