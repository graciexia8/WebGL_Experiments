// Gets the canvas on the html 
function getCanvas(canvas_id) {
    let canvas;
  
    canvas = document.getElementById(canvas_id);
    if (!canvas || canvas.nodeName !== "CANVAS") {
      console.log('Fatal error: Canvas "' + canvas_id + '" could not be found');
    }
    return canvas;
  }

// Gets the current webGL context for the canvas passed in.
function getWebglContext(canvas) {
    let context;
  
    context = canvas.getContext('webgl');
    if (!context) {
      console.log("No WebGL context could be found.");
    }
  
    return context;
};