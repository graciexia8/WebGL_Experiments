"use strict";

// Gets the canvas on the html 
function getCanvas(canvas_id) {

    const canvas = document.getElementById(canvas_id);

    if (!canvas || canvas.nodeName !== "CANVAS") {
      console.log('Fatal error: Canvas "' + canvas_id + '" could not be found');
    }

    return canvas;
  }

// Gets the current webGL context for the canvas passed in.
function getWebglContext(canvas) {

    const context = canvas.getContext('webgl');
    if (!context) {
      console.log("No WebGL context could be found.");
    }
  
    return context;
};