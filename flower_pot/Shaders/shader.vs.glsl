precision mediump float;
precision mediump int;

uniform mat4 mWorld;
uniform mat4 mView;
uniform mat4 mProj;
uniform vec4 u_Color;

attribute vec3 vertexPosition;

void main(){
    gl_Position = mProj*mView*mWorld*vec4(vertexPosition, 1.0);
}