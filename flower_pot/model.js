"use strict";

  window.SimpleModel = function (name) {
    const self = this;
    self.name = name;
    self.vertices = [];
    self.indices = [];
    self.textureCoord = [];
  };

  window.CreateFlowerPot = function (modelObj) {

    
    const model = new SimpleModel("flowerPot");
    model.indices = [].concat.apply([], modelObj.meshes[0].faces);
    // Vertex data
    model.vertices = modelObj.meshes[0].vertices;
    model.color = new Float32Array( [0.5, 0.0, 0.3, 1.0]); // BLACK;
    
    return model;
  };