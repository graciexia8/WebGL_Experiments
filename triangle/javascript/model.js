"use strict";

// Model data that defines coordinates of triantle
window.Triangle = function (vertices, colors) {
    const self = this;
    self.vertices = vertices;
    self.colors = colors;
};

window.SimpleModel = function (name) {
    const self = this;
    self.name = name;
    self.triangle;
};

window.CreateTriangle = function () {
  
  // Vertex data
  const vertices = [ [0.0, 0.5], [-0.5, -0.5], [0.5, -0.5] ];
  
  // Create 4 triangles
  const colors = [[ 0.5, 1.0, 0.4],[0.7, 0.0, 1.0], [0.1, 0.4, 0.6]];
  const triangle1 = new Triangle([vertices[0], vertices[1], vertices[2]], colors);
    
  // Create a model that is a triangle
  const model = new SimpleModel("triangle");
  model.triangle = triangle1;

  return model;
};