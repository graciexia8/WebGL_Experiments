
window.InitDemo = function () {
	loadTextResource("../flower_pot_light/Shaders/shader.vs.glsl", function (vsErr, vsText) {
	  if (vsErr) {
		alert("Fatal Error: Getting vertex shader");
		console.error(vsErr);
	  }
	  else {
		loadTextResource("../flower_pot_light/Shaders/shader.fs.glsl", function (fsErr, fsText) {
		  if (fsErr) {
			alert("Fatal Error: Getting fragment shader");
			console.error(fsErr);
		  }
		  else {
			loadJSONResource("../models/json_models/flower_pot.json", function (modelErr, modelText){
			  if (modelErr) {
				alert("Fatal Error: Getting model json");
				console.error(modelErr);
			  }
			  else {
				runDemo(vsText, fsText, modelText); // Successfully load vertex shader, fragment shader and model data before rendering.
			  }
			});
		  
		  }
		});
	  }
	});
  };

var runDemo = function (vertShadertext, fragShadertext, modelText) {

    //get vertex and fragment shader from html file
    //I've also written these in a separate file, but since js can't access locally with a webserver, this is the alt solution.
    const vertShaderSource = vertShadertext;
	const fragShaderSource = fragShadertext;
	
	console.log(modelText);

	// Get the canvas and get the webGL context object
	var canvas = document.getElementById('game-surface');
	var gl = canvas.getContext('webgl');

	if (!gl) {
		console.log('WebGL not supported, falling back on experimental-webgl');
		gl = canvas.getContext('experimental-webgl');
	}

	if (!gl) {
		alert('Your browser does not support WebGL');
	}

	// Clear the color buffer and depth buffer so program can do hidden surface removal
	gl.clearColor(0.75, 0.85, 0.8, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	gl.enable(gl.DEPTH_TEST); // Enable hidden surface removel
	gl.enable(gl.CULL_FACE);
	gl.frontFace(gl.CCW);
	gl.cullFace(gl.BACK);

	// Determine how many texture units there are
	console.log(gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS));

	//
	// Create shaders
	// 
	var vertexShader = gl.createShader(gl.VERTEX_SHADER);
	var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

	// Set the source of the shaders, in html file
	gl.shaderSource(vertexShader, vertShaderSource);
	gl.shaderSource(fragmentShader, fragShaderSource);

	gl.compileShader(vertexShader);
	if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
		console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vertexShader));
		return;
	}

	gl.compileShader(fragmentShader);
	if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
		console.error('ERROR compiling fragment shader!', gl.getShaderInfoLog(fragmentShader));
		return;
	}

	// create the current webGL Program, attach vertex and fragment shader to program
	let program = gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program); // Link the program

	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
		console.error('ERROR linking program!', gl.getProgramInfoLog(program));
		return;
	}
	gl.validateProgram(program);
	if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
		console.error('ERROR validating program!', gl.getProgramInfoLog(program));
		return;
	}

	// Create a model with ll buffer objects available.
	const model = createModel(modelText);

	const objectsInScene = new Render(gl, program, model, canvas);
	objectsInScene.render(gl, program, model);
	
};