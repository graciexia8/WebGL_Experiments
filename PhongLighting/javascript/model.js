"use strict";

window.simpleModel = function (name,  vertices, indices, normals, uv) {
    const self = this;
    self.name = name;
    self.indices = indices;
	self.vertices = vertices;
	self.normals = normals;
	self.uvCoord = uv;

};

window.createModel = function () {

	// Create vertex buffer for vertices of model
	const boxVertices = 
	[ // X, Y, Z           U, V
		// Top
		-1.75, 1.75, -1.75, 	
		-1.75, 1.75, 1.75, 
		1.75, 1.75, 1.75,  
		1.75, 1.75, -1.75,   

		// Left
		-1.75, 1.75, 1.75,	
		-1.75, -1.75, 1.75,
		-1.75, -1.75, -1.75,	
		-1.75, 1.75, -1.75,	

		// Right
		1.75, 1.75, 1.75,		
		1.75, -1.75, 1.75,
		1.75, -1.75, -1.75,
		1.75, 1.75, -1.75,		

		// Front
		1.75, 1.75, 1.75,	
		1.75, -1.75, 1.75,
		-1.75, -1.75, 1.75,   
		-1.75, 1.75, 1.75,   

		// Back
		1.75, 1.75, -1.75,   	
		1.75, -1.75, -1.75,   	
		-1.75, -1.75, -1.75,   
		-1.75, 1.75, -1.75,  	

		// Bottom
		-1.75, -1.75, -1.75,
		-1.75, -1.75, 1.75,	
		1.75, -1.75, 1.75,	
		1.75, -1.75, -1.75,	
	];

	// Create vertex buffer for vertices of model
	const uv = 
		[ // X, Y, Z           U, V
			// Top
			0, 0,	
			0, 1,	
			1, 1,	
			1, 0,	
	
			// Left
			0, 0,		
			1, 0,		
			1, 1,		
			0, 1,		
	
			// Right
			1, 1,		
			0, 1,	
			0, 0,	
			1, 0,		
	
			// Front
			1, 1,	
			1, 0,	
			0, 0,
			0, 1,	
	
			// Back
			0, 0,	
			0, 1,	
			1, 1,	
			1, 0,	
	
			// Bottom
			1, 1,	
			1, 0,	
			0, 0,	
			0, 1,	
		];

		// Create vertex buffer for vertices of model
	const vertexNormal = 
		[ // X, Y, Z           U, V
			// Top Y+
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
	
			// Left X-
			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,
	
			// Right X+
			1, 0, 0,
			1, 0, 0,
			1, 0, 0,
			1, 0, 0,
	
			// Front Z+
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
	
			// Back Z-
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
	
			// Bottom Y-
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,
		];
	

    // Create buffer for indices, which vertices make up the cube
	const boxIndices =
	[
		// Top
		0, 1, 2,
		0, 2, 3,

		// Left
		5, 4, 6,
		6, 4, 7,

		// Right
		8, 9, 10,
		8, 10, 11,

		// Front
		13, 12, 14,
		15, 14, 12,

		// Back
		16, 17, 18,
		16, 18, 19,

		// Bottom
		21, 20, 22,
		22, 20, 23
	];
  
    
  // Create a model that is a triangle
  const model = new simpleModel("genDesignCube", boxVertices, boxIndices, vertexNormal, uv);

  return model;
};