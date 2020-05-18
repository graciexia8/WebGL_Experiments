"use strict";

window.Triangle = function (vertices, colors) {
    const self = this;
    self.vertices = vertices;
    self.colors = colors;
  };

  window.SimpleModel = function (name) {
    const self = this;
    self.name = name;
    self.triangle = [];
  };

  window.CreateCube= function () {
  
    // Vertex data
    const vertices = [ [0.25, 0.25, 0.0],
                 [0.25, -0.25, 0.0],
                 [-0.25, -0.25, 0.0],
                 [-0.25, 0.25, 0.0],
                 [0.25, 0.25, .5],
                 [0.25, -0.25, .5],
                 [-0.25, -0.25, .5],
                 [-0.25, 0.25, 0.5] ];

  
    // Create 4 triangles
    const colors = [[ 0.5, 1.0, 0.4],[0.5, 1.0, 0.4], [0.5, 1.0, 0.4]];
    const colors2 = [[0.2, 0.0, 1.0],[0.2, 0.0, 1.0], [0.2, 0.0, 1.0]];
    const colors3 = [[0.4, 0.2, 1.0], [0.4, 0.2, 1.0], [0.4, 0.2, 1.0]];
    const colors4 = [[1.0, 1.0, 0.2], [1.0, 1.0, 0.2], [1.0, 1.0, 0.2]];
    const colors5 = [[0.9, 0.8, 1.0], [0.9, 0.8, 1.0], [0.9, 0.8, 1.0]];
    const colors6 = [[0.4, 0.2, 0.3], [0.4, 0.2, 0.3], [0.4, 0.2, 0.3]];

  // Create 4 triangles
  //bottom face
  const triangle1 = new Triangle([vertices[0], vertices[1], vertices[2]], colors);
  const triangle2 = new Triangle([vertices[0], vertices[2], vertices[3]], colors);

  //front
  const triangle3 = new Triangle([vertices[1], vertices[2], vertices[6]], colors2);
  const triangle4 = new Triangle([vertices[1], vertices[5], vertices[6]], colors2);

  //back
  const triangle5 = new Triangle([vertices[0], vertices[3], vertices[7]], colors3);
  const triangle6 = new Triangle([vertices[0], vertices[4], vertices[7]], colors3);

  //right
  const triangle7 = new Triangle([vertices[0], vertices[4], vertices[5]], colors4);
  const triangle8 = new Triangle([vertices[0], vertices[1], vertices[5]], colors4);

  //left
  const triangle9 = new Triangle([vertices[2], vertices[3], vertices[6]], colors5);
  const triangle10 = new Triangle([vertices[3], vertices[6], vertices[7]], colors5);

  //top
  const triangle11 = new Triangle([vertices[7], vertices[6], vertices[4]], colors6);
  const triangle12 = new Triangle([vertices[6], vertices[5], vertices[4]], colors6);

    
    // Create a model that is a triangle
    const model = new SimpleModel("cube");
    model.triangle = [triangle1, triangle2, 
                      triangle3, triangle4, 
                      triangle5, triangle6, 
                      triangle7, triangle8,
                      triangle9, triangle10,
                      triangle11, triangle12];

    return model;
  };