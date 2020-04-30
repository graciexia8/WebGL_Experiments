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
    vertices = [ [ 0.0, -0.25, -0.50],
    [ 0.0,  0.25,  0.00],
    [ 0.5, -0.25,  0.25],
    [-0.5, -0.25,  0.25] ];
  
    // Create 4 triangles
    colors = [[ 0.5, 1.0, 0.4],[0.2, 0.0, 1.0], [0.4, 0.2, 1.0]];
    colors2 = [[1.0, 1.0, 0.2],[0.2, 0.4, 0.4], [0.8, 0.2, 0.3]];


    // Create 4 triangles
    triangle1 = new Triangle([vertices[2], vertices[1], vertices[3]], colors);
    triangle2 = new Triangle([vertices[3], vertices[1], vertices[0]], colors2);
    triangle3 = new Triangle([vertices[0], vertices[1], vertices[2]], colors);
    triangle4 = new Triangle([vertices[0], vertices[2], vertices[3]], colors2);


    
    // Create a model that is a triangle
    var model = new SimpleModel("prism");
    model.triangle = [triangle1, triangle4,triangle3, triangle2];

    return model;
  };