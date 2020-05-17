"use strict";

// Model used to store the vertices and colors of triangle.
window.Triangle = function (vertices, colors) {
    const self = this;
    self.vertices = vertices;
    self.colors = colors;
  };

  //Model with an array of Triangles that make up the prism.
  window.SimpleModel = function (name) {
    const self = this;
    self.name = name;
    self.triangle = [];
  };

  //Creates prism, the 4 triangles that make up the prism and the colors of each prism.
  window.CreatePrism = function () {
  
    // Vertex data
    const vertices = [ [ 0.0, -0.25, -0.50],
    [ 0.0,  0.25,  0.00],
    [ 0.5, -0.25,  0.25],
    [-0.5, -0.25,  0.25] ];
  
    // Create 4 triangles
    const colors = [[ 0.5, 1.0, 0.4],[0.2, 0.0, 1.0], [0.4, 0.2, 1.0]];
    const colors2 = [[1.0, 1.0, 0.2],[0.2, 0.4, 0.4], [0.8, 0.2, 0.3]];

    // Create 4 triangles
    const triangle1 = new Triangle([vertices[2], vertices[1], vertices[3]], colors);
    const triangle2 = new Triangle([vertices[3], vertices[1], vertices[0]], colors2);
    const triangle3 = new Triangle([vertices[0], vertices[1], vertices[2]], colors);
    const triangle4 = new Triangle([vertices[0], vertices[2], vertices[3]], colors2);
    
    // Create a model that is a triangle
    const model = new SimpleModel("prism");

    //create prims model.
    model.triangle = [triangle1, triangle4,triangle3, triangle2];

    return model;
  };