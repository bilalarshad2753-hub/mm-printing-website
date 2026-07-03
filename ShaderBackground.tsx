'use client'

import { useEffect, useRef } from 'react'

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const syncSize = () => {
      const w = canvas.clientWidth || 1280
      const h = canvas.clientHeight || 720
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
      }
    }

    if (typeof ResizeObserver !== 'undefined') {
      new ResizeObserver(syncSize).observe(canvas)
    }
    syncSize()

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) return

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`

    const fs = `precision highp float;
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
}`

    const createShader = (type: number, src: string) => {
      const s = gl.createShader(type)!
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return s
    }

    const prog = gl.createProgram()!
    gl.attachShader(prog, createShader(gl.VERTEX_SHADER, vs))
    gl.attachShader(prog, createShader(gl.FRAGMENT_SHADER, fs))
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)

    const pos = gl.getAttribLocation(prog, 'a_position')
    gl.enableVertexAttribArray(pos)
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)

    const uTime = gl.getUniformLocation(prog, 'u_time')
    const uRes = gl.getUniformLocation(prog, 'u_resolution')
    const uMouse = gl.getUniformLocation(prog, 'u_mouse')

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 }
    window.addEventListener('mousemove', (event) => {
      const rect = canvas.getBoundingClientRect()
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width
        const ny = 1.0 - (event.clientY - rect.top) / rect.height
        mouse.x = nx * canvas.width
        mouse.y = ny * canvas.height
      }
    })

    const render = (t: number) => {
      if (typeof ResizeObserver === 'undefined') syncSize()
      gl.viewport(0, 0, canvas.width, canvas.height)
      if (uTime) gl.uniform1f(uTime, (t * 0.001) as number)
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height)
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      requestAnimationFrame(render)
    }
    render(0)
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-40">
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  )
}
