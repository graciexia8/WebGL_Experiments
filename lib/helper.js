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
}

const loadTextResource = function (url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = function () {
      if (request.status < 200 || request.status > 299) {
          // codes in 200 are okay
          // 300s deal with something have been moved
          // 400-500 are error codes
          callback('Error: HTTP Status ' + request.status + "on resource " + url);
      } else {
          callback(null, request.responseText);
      }
  };
  request.send();
};

const loadImage = function (url, callback) {
  let image = new image();
  image.onload = function () {
      callback(null, image);
  };
  image.src = url;
};

const loadJSONResource = function (url, callback) {
  loadTextResource(url, function (err, result) {
      if (err) {
          callback(err);
      }
      else {
          try {
              callback(null, JSON.parse(result));
          }
          catch (e) {
              callback(e);
          }
      }
  })
};