module.exports=[48890,a=>{"use strict";var b=a.i(75806),c=a.i(60094);a.s(["default",0,function(){let a=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let b=a.current;if(!b)return;let c=()=>{let a=b.clientWidth||1280,c=b.clientHeight||720;(b.width!==a||b.height!==c)&&(b.width=a,b.height=c)};"u">typeof ResizeObserver&&new ResizeObserver(c).observe(b),c();let d=b.getContext("webgl")||b.getContext("experimental-webgl");if(!d)return;let e=`attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`,f=`precision highp float;
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
}`,g=(a,b)=>{let c=d.createShader(a);return d.shaderSource(c,b),d.compileShader(c),c},h=d.createProgram();d.attachShader(h,g(d.VERTEX_SHADER,e)),d.attachShader(h,g(d.FRAGMENT_SHADER,f)),d.linkProgram(h),d.useProgram(h);let i=d.createBuffer();d.bindBuffer(d.ARRAY_BUFFER,i),d.bufferData(d.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),d.STATIC_DRAW);let j=d.getAttribLocation(h,"a_position");d.enableVertexAttribArray(j),d.vertexAttribPointer(j,2,d.FLOAT,!1,0,0);let k=d.getUniformLocation(h,"u_time"),l=d.getUniformLocation(h,"u_resolution"),m=d.getUniformLocation(h,"u_mouse"),n={x:b.width/2,y:b.height/2};window.addEventListener("mousemove",a=>{let c=b.getBoundingClientRect();if(c.width&&c.height){let d=(a.clientX-c.left)/c.width,e=1-(a.clientY-c.top)/c.height;n.x=d*b.width,n.y=e*b.height}});let o=a=>{"u"<typeof ResizeObserver&&c(),d.viewport(0,0,b.width,b.height),k&&d.uniform1f(k,.001*a),l&&d.uniform2f(l,b.width,b.height),m&&d.uniform2f(m,n.x,n.y),d.drawArrays(d.TRIANGLE_STRIP,0,4),requestAnimationFrame(o)};o(0)},[]),(0,b.jsx)("div",{className:"fixed inset-0 w-full h-full z-0 pointer-events-none opacity-40",children:(0,b.jsx)("canvas",{ref:a,style:{display:"block",width:"100%",height:"100%"}})})}])}];

//# sourceMappingURL=Downloads_mm_printing_components_ShaderBackground_tsx_0na3hde._.js.map