const truckSlider = document.getElementById("truck");
const truckOutput = document.getElementById("truckVal");

const tiltSlider = document.getElementById("tilt");
const tiltOutput = document.getElementById("tiltVal");

const panSlider = document.getElementById("pan");
const panOutput = document.getElementById("panVal");

const canSlider = document.getElementById("can");
const canOutput = document.getElementById("canVal");

const dollySlider = document.getElementById("dolly");
const dollyOutput = document.getElementById("dollyVal");

truckSlider.oninput = function() {
    truckOutput.innerHTML = this.value;
}

tiltSlider.oninput = function() {
    tiltOutput.innerHTML = this.value;
}

panSlider.oninput = function() {
    panOutput.innerHTML = this.value;
}

canSlider.oninput = function() {
    canOutput.innerHTML = this.value;
}

dollySlider.oninput = function() {
    dollyOutput.innerHTML = this.value;
}


