(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,56634,e=>{"use strict";var t=e.i(93071),i=e.i(84489);e.s(["default",0,function(){let e=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let t=e.current;if(!t)return;let i=()=>{let e=t.clientWidth||1280,i=t.clientHeight||720;(t.width!==e||t.height!==i)&&(t.width=e,t.height=i)};"u">typeof ResizeObserver&&new ResizeObserver(i).observe(t),i();let o=t.getContext("webgl")||t.getContext("experimental-webgl");if(!o)return;let r=`attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`,l=`precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

varying vec2 v_texCoord;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.y, u_resolution.x);
    
    // Brand Colors: Industrial Orange and Light Red
    vec3 color1 = vec3(0.95, 0.39, 0.1);  // #F26419 Orange
    vec3 color2 = vec3(0.94, 0.27, 0.27); // Light Red
    vec3 color3 = vec3(0.15, 0.16, 0.18); // Deep Tech Charcoal
    
    // Multi-layered fluid motion
    float t = u_time * 0.4;
    
    // Swirling ink effect
    for(float i = 1.0; i < 4.0; i++){
        p.x += 0.3 / i * sin(i * 3.0 * p.y + t + cos((t / (i * 10.0)) * i));
        p.y += 0.3 / i * cos(i * 3.0 * p.x + t + sin((t / (i * 10.0)) * i));
    }
    
    float pattern = sin(p.x + p.y) * 0.5 + 0.5;
    
    // Mix colors based on the fluid pattern
    vec3 finalColor = mix(color1, color2, pattern);
    
    // Add depth with a dark vignette/overlay
    float dist = length(uv - 0.5);
    finalColor = mix(finalColor, color3, dist * 1.2);
    
    // Technical Grid overlay
    vec2 grid = fract(uv * 40.0 + sin(u_time * 0.1));
    float line = smoothstep(0.0, 0.02, grid.x) * smoothstep(1.0, 0.98, grid.x) *
                 smoothstep(0.0, 0.02, grid.y) * smoothstep(1.0, 0.98, grid.y);
    finalColor += color1 * (1.0 - line) * 0.08;
    
    // Mouse Glow
    vec2 m = u_mouse / u_resolution;
    float mDist = length(uv - m);
    float glow = 0.08 / (mDist + 0.1);
    finalColor += mix(color1, color2, sin(u_time)) * glow;

    gl_FragColor = vec4(finalColor, 1.0);
}`,n=(e,t)=>{let i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i},a=o.createProgram();o.attachShader(a,n(o.VERTEX_SHADER,r)),o.attachShader(a,n(o.FRAGMENT_SHADER,l)),o.linkProgram(a),o.useProgram(a);let s=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,s),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),o.STATIC_DRAW);let u=o.getAttribLocation(a,"a_position");o.enableVertexAttribArray(u),o.vertexAttribPointer(u,2,o.FLOAT,!1,0,0);let c=o.getUniformLocation(a,"u_time"),d=o.getUniformLocation(a,"u_resolution"),h=o.getUniformLocation(a,"u_mouse"),f={x:t.width/2,y:t.height/2};window.addEventListener("mousemove",e=>{let i=t.getBoundingClientRect();if(i.width&&i.height){let o=(e.clientX-i.left)/i.width,r=1-(e.clientY-i.top)/i.height;f.x=o*t.width,f.y=r*t.height}});let g=e=>{"u"<typeof ResizeObserver&&i(),o.viewport(0,0,t.width,t.height),c&&o.uniform1f(c,.001*e),d&&o.uniform2f(d,t.width,t.height),h&&o.uniform2f(h,f.x,f.y),o.drawArrays(o.TRIANGLE_STRIP,0,4),requestAnimationFrame(g)};g(0)},[]),(0,t.jsx)("div",{className:"fixed inset-0 w-full h-full z-0 pointer-events-none opacity-40",children:(0,t.jsx)("canvas",{ref:e,style:{display:"block",width:"100%",height:"100%"}})})}])}]);