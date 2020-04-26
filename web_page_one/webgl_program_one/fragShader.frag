precision mediump float;
precision mediump int;

varying vec3 fragColor;

void main(){
    //only output your fragment shader will ever have
    
    gl_FragColor = vec4(fragColor, 1.0);
}