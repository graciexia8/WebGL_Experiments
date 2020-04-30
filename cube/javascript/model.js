window.Triangle = function (vertices, colors) {
    var self = this;
    self.vertices = vertices;
    self.colors = colors;
  };

  window.SimpleModel = function (name) {
    var self = this;
    self.name = name;
    self.triangle = [];
  };

  window.CreateCube= function () {
    var vertices, triangle1, triangle2, triangle3, triangle4
  
    // Vertex data
    vertices = [ [0.25, 0.25, 0.0],
                 [0.25, -0.25, 0.0],
                 [-0.25, -0.25, 0.0],
                 [-0.25, 0.25, 0.0],
                 [0.25, 0.25, .5],
                 [0.25, -0.25, .5],
                 [-0.25, -0.25, .5],
                 [-0.25, 0.25, 0.5] ];

  
    // Create 4 triangles
    colors = [[ 0.5, 1.0, 0.4],[0.5, 1.0, 0.4], [0.5, 1.0, 0.4]];
    colors2 = [[0.2, 0.0, 1.0],[0.2, 0.0, 1.0], [0.2, 0.0, 1.0]];
    colors3 = [[0.4, 0.2, 1.0], [0.4, 0.2, 1.0], [0.4, 0.2, 1.0]];
    colors4 = [[1.0, 1.0, 0.2], [1.0, 1.0, 0.2], [1.0, 1.0, 0.2]];
    colors5 = [[0.9, 0.8, 1.0], [0.9, 0.8, 1.0], [0.9, 0.8, 1.0]];
    colors6 = [[0.4, 0.2, 0.3], [0.4, 0.2, 0.3], [0.4, 0.2, 0.3]];

  // Create 4 triangles
  //bottom face
  triangle1 = new Triangle([vertices[0], vertices[1], vertices[2]], colors);
  triangle2 = new Triangle([vertices[0], vertices[2], vertices[3]], colors);

  //front
  triangle3 = new Triangle([vertices[1], vertices[2], vertices[6]], colors2);
  triangle4 = new Triangle([vertices[1], vertices[5], vertices[6]], colors2);

  //back
  triangle5 = new Triangle([vertices[0], vertices[3], vertices[7]], colors3);
  triangle6 = new Triangle([vertices[0], vertices[4], vertices[7]], colors3);

  //right
  triangle7 = new Triangle([vertices[0], vertices[4], vertices[5]], colors4);
  triangle8 = new Triangle([vertices[0], vertices[1], vertices[5]], colors4);

  //left
  triangle9 = new Triangle([vertices[2], vertices[3], vertices[6]], colors5);
  triangle10 = new Triangle([vertices[3], vertices[6], vertices[7]], colors5);

  //top
  triangle11 = new Triangle([vertices[7], vertices[6], vertices[4]], colors6);
  triangle12 = new Triangle([vertices[6], vertices[5], vertices[4]], colors6);

    
    // Create a model that is a triangle
    var model = new SimpleModel("cube");
    model.triangle = [triangle1, triangle2, 
                      triangle3, triangle4, 
                      triangle5, triangle6, 
                      triangle7, triangle8,
                      triangle9, triangle10,
                      triangle11, triangle12];

    return model;
  };