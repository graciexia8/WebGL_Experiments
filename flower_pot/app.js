window.initDemo = function () {
  loadTextResource("./shader.vs.glsl", function (vsErr, vsText) {
    if (vsErr) {
      alert("Fatal Error: Getting vertex shader");
      console.error(vsErr);
    }
    else {
      loadTextResource("./shader.fs.glsl", function (fsErr, fsText) {
        if (fsErr) {
          alert("Fatal Error: Getting fragment shader");
          console.error(fsErr);
        }
        else {
          loadJSONResource("./flower_pot.json", function (modelErr, modelText){
            if (modelErr) {
              alert("Fatal Error: Getting model json");
              console.error(modelErr);
            }
            else {
              runDemo(vsText, fsText, modelText);
            }
          });
        
        }
      });
    }
  });
};

window.runDemo = function(vertShaderSource, fragShaderSource, modelText){
    console.log(modelText);

    const canvas = getCanvas("game-surface");
    const gl = this.getWebglContext(canvas);

    gl.clearColor(0.0, 0.5, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT, gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);

    //NOT SURE WHAT THESE ARE, BUT PUT HTEM HERE BC THE GUY IN THE TUTORIAL HAD THEM
    gl.enable(gl.CULL_FACE);
    gl.frontFace(gl.CCW);
    gl.cullFace(gl.BACK);

    // //get vertex and fragment shader from html file
    // //I've also written these in a separate file, but since js can't access locally with a webserver, this is the alt solution.
    // const vertShaderSource = document.getElementById("vertex-shader").text;
    // const fragShaderSource = document.getElementById("fragment-shader").text;

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
    const model = CreateFlowerPot(modelText);
    let Matrix = new this.Learn_webgl_matrix();
    const FlowerPot = new CubeRender(gl, program, model, Matrix);

    FlowerPot.render(gl);

}
