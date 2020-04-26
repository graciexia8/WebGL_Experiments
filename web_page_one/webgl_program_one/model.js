window.Triangle = function (vertices) {
    var self = this;
    self.vertices = vertices;
  };

  window.SimpleModel = function (name) {
    var self = this;
    self.name = name;
    self.triangle;
  };

  window.CreateTriangle = function () {
    var vertices, triangle1
  
    // Vertex data
    vertices = [ [0.0, 0.75], [-0.5, -0.5], [0.5, -0.5 ]];
  
    // Create 4 triangles
    triangle1 = new Triangle([vertices[0], vertices[1], vertices[2]]);
  
    // Create a model that is a triangle
    var model = new SimpleModel("triangle");
    model.triangle = triangle1;

    return model;
  };