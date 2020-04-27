window.Triangle = function (vertices, colors) {
    var self = this;
    self.vertices = vertices;
    self.colors = colors;
  };

  window.SimpleModel = function (name) {
    var self = this;
    self.name = name;
    self.triangle;
  };

  window.CreateTriangle = function () {
    var vertices, triangle1
  
    // Vertex data
    vertices = [ [0.0, 1.0], [-0.5, -0.5], [0.5, -0.5] ];
  
    // Create 4 triangles
    colors = [[ 1.0, 1.0, 0.0],[0.7, 0.0, 1.0], [0.1, 1.0, 0.6]];
    triangle1 = new Triangle([vertices[0], vertices[1], vertices[2]], colors);
    
    
    // Create a model that is a triangle
    var model = new SimpleModel("triangle");
    model.triangle = triangle1;

    return model;
  };