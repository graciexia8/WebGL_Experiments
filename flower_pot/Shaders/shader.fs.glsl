precision mediump float;
precision mediump int;
      
uniform   vec4 u_Color;
      
void main(){
    //only output your fragment shader will ever have
    gl_FragColor = u_Color;
      }