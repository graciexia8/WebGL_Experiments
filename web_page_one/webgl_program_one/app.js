window.initDemo = function(){
    console.log("this is working");

    let canvas = getCanvas("game-surface");
    let context = this.getWebglContext(canvas);


    
    
}

function getCanvas(canvas_id) {
    var canvas;
  
    canvas = document.getElementById(canvas_id);
    if (!canvas || canvas.nodeName !== "CANVAS") {
      console.log('Fatal error: Canvas "' + canvas_id + '" could not be found');
    }
    return canvas;
  }

function getWebglContext(canvas) {
    let context;
  
    context = canvas.getContext('webgl');
    if (!context) {
      console.log("No WebGL context could be found.");
    }
  
    return context;
  };