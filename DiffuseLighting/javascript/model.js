"use strict";

window.simpleModel = function (name,  vertices, indices, normals) {
    const self = this;
    self.name = name;
    self.indices = indices;
	self.vertices = vertices;
	self.normals = normals;

};

window.createModel = function () {

	// Create vertex buffer for vertices of model
	var boxVertices = 
	[ // X, Y, Z           U, V
		// Top
		-0.75, 0.75, -0.75,   0, 0,	
		-0.75, 0.75, 0.75,    0, 1,	
		0.75, 0.75, 0.75,     1, 1,	
		0.75, 0.75, -0.75,    1, 0,	

		// Left
		-0.75, 0.75, 0.75,    0, 0,		
		-0.75, -0.75, 0.75,   1, 0,		
		-0.75, -0.75, -0.75,  1, 1,		
		-0.75, 0.75, -0.75,   0, 1,		

		// Right
		0.75, 0.75, 0.75,    1, 1,		
		0.75, -0.75, 0.75,   0, 1,	
		0.75, -0.75, -0.75,  0, 0,	
		0.75, 0.75, -0.75,   1, 0,		

		// Front
		0.75, 0.75, 0.75,    1, 1,	
		0.75, -0.75, 0.75,    1, 0,	
		-0.75, -0.75, 0.75,    0, 0,
		-0.75, 0.75, 0.75,    0, 1,	

		// Back
		0.75, 0.75, -0.75,    0, 0,	
		0.75, -0.75, -0.75,    0, 1,	
		-0.75, -0.75, -0.75,    1, 1,	
		-0.75, 0.75, -0.75,    1, 0,	

		// Bottom
		-0.75, -0.75, -0.75,   1, 1,	
		-0.75, -0.75, 0.75,    1, 0,	
		0.75, -0.75, 0.75,     0, 0,	
		0.75, -0.75, -0.75,    0, 1,	
	];

		// Create vertex buffer for vertices of model
	var vertexNormal = 
		[ // X, Y, Z           U, V
			// Top
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
	
			// Left
			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,
	
			// Right
			1, 0, 0,
			1, 0, 0,
			1, 0, 0,
			1, 0, 0,
	
			// Front
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
	
			// Back
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
	
			// Bottom
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,
		];
	

    // Create buffer for indices
	var boxIndices =
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
  const model = new simpleModel("genDesignCube", boxVertices, boxIndices, vertexNormal);

  return model;
};