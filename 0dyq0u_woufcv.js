(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,56634,e=>{"use strict";var t=e.i(93071),r=e.i(84489);e.s(["default",0,function(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=e.current;if(!t)return;let r=()=>{let e=t.clientWidth||1280,r=t.clientHeight||720;(t.width!==e||t.height!==r)&&(t.width=e,t.height=r)};"u">typeof ResizeObserver&&new ResizeObserver(r).observe(t),r();let i=t.getContext("webgl")||t.getContext("experimental-webgl");if(!i)return;let o=`attribute vec2 a_position;
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
}`,n=(e,t)=>{let r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r},a=i.createProgram();i.attachShader(a,n(i.VERTEX_SHADER,o)),i.attachShader(a,n(i.FRAGMENT_SHADER,l)),i.linkProgram(a),i.useProgram(a);let s=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,s),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),i.STATIC_DRAW);let d=i.getAttribLocation(a,"a_position");i.enableVertexAttribArray(d),i.vertexAttribPointer(d,2,i.FLOAT,!1,0,0);let c=i.getUniformLocation(a,"u_time"),u=i.getUniformLocation(a,"u_resolution"),f=i.getUniformLocation(a,"u_mouse"),h={x:t.width/2,y:t.height/2};window.addEventListener("mousemove",e=>{let r=t.getBoundingClientRect();if(r.width&&r.height){let i=(e.clientX-r.left)/r.width,o=1-(e.clientY-r.top)/r.height;h.x=i*t.width,h.y=o*t.height}});let m=e=>{"u"<typeof ResizeObserver&&r(),i.viewport(0,0,t.width,t.height),c&&i.uniform1f(c,.001*e),u&&i.uniform2f(u,t.width,t.height),f&&i.uniform2f(f,h.x,h.y),i.drawArrays(i.TRIANGLE_STRIP,0,4),requestAnimationFrame(m)};m(0)},[]),(0,t.jsx)("div",{className:"fixed inset-0 w-full h-full z-0 pointer-events-none opacity-40",children:(0,t.jsx)("canvas",{ref:e,style:{display:"block",width:"100%",height:"100%"}})})}])},48425,e=>{"use strict";var t=e.i(93071),r=e.i(84489);e.s(["default",0,function({src:e,poster:i,ariaLabel:o,className:l}){let n=(0,r.useRef)(null),[a,s]=(0,r.useState)(null);return(0,r.useEffect)(()=>{let t=n.current;if(!t)return;let r=()=>{let r=t.error,i="Unknown video error";r&&(i=`MediaError code=${r.code}`,r.message&&(i+=` message=${r.message}`)),console.error("VideoPlayer error",i,{src:e}),s(i)},i=()=>s(null);return t.addEventListener("error",r),t.addEventListener("play",i),()=>{t.removeEventListener("error",r),t.removeEventListener("play",i)}},[e]),(0,t.jsxs)("div",{className:l??"",children:[(0,t.jsx)("video",{ref:n,controls:!0,poster:i,className:"w-full h-full min-h-[280px] object-cover","aria-label":o,preload:"metadata",playsInline:!0,children:(0,t.jsx)("source",{src:e,type:"video/mp4"})}),a&&(0,t.jsxs)("div",{className:"mt-3 rounded-md bg-red-900/80 p-3 text-sm text-white",children:[(0,t.jsxs)("div",{children:["Video failed to play: ",a]}),(0,t.jsxs)("div",{className:"mt-2 flex gap-2",children:[(0,t.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",className:"underline",children:"Open raw video"}),(0,t.jsx)("a",{href:e,download:!0,className:"underline",children:"Download"})]})]})]})}])}]);