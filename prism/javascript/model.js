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

  window.CreatePrism = function () {
    var vertices, triangle1, triangle2, triangle3, triangle4
  
    // Vertex data
    vertices = [ [0.0, 0.0, 0.5], [0.0, 0.5, 0.0], [0.5, 0.0, 0.0], [-1.0, 0, 0]];
  
    // Create 4 triangles
    colors = [[ 0.5, 1.0, 0.4],[0.5, 1.0, 0.4], [0.5, 1.0, 0.4]];
    colors2 = [[0.2, 0.0, 1.0],[0.2, 0.0, 1.0], [0.2, 0.0, 1.0]];
    colors3 = [[0.4, 0.2, 1.0], [0.4, 0.2, 1.0], [0.4, 0.2, 1.0]];
    colors4 = [[1.0, 1.0, 0.2], [1.0, 1.0, 0.2], [1.0, 1.0, 0.2]];

    triangle2 = new Triangle([vertices[0], vertices[1], vertices[2]], colors);
    triangle1 = new Triangle([vertices[0], vertices[2], vertices[3]], colors4);
    triangle4 = new Triangle([vertices[3], vertices[1], vertices[2]], colors2);
    triangle3 = new Triangle([vertices[0], vertices[1], vertices[3]], colors3);

    
    // Create a model that is a triangle
    var model = new SimpleModel("triangle");
    model.triangle = [triangle4,triangle1,triangle2, triangle3];

    return model;
  };