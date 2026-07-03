const fs = require('fs');
const zlib = require('zlib');

const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = (c & 1) ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  crcTable[n] = c >>> 0;
}

function crc32(buffer) {
  let c = 0xffffffff;
  for (const b of buffer) {
    c = crcTable[(c ^ b) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function pngChunk(type, data) {
  const buffer = Buffer.alloc(8 + data.length + 4);
  buffer.writeUInt32BE(data.length, 0);
  buffer.write(type, 4, 'ascii');
  data.copy(buffer, 8);
  buffer.writeUInt32BE(crc32(Buffer.concat([Buffer.from(type, 'ascii'), data])), 8 + data.length);
  return buffer;
}

function createPng(filePath, width, height, pixelFn) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8); // bit depth
  ihdr.writeUInt8(2, 9); // color type: truecolor
  ihdr.writeUInt8(0, 10); // compression method
  ihdr.writeUInt8(0, 11); // filter method
  ihdr.writeUInt8(0, 12); // interlace method

  const raw = Buffer.alloc((width * 3 + 1) * height);
  let offset = 0;

  for (let y = 0; y < height; y++) {
    raw[offset++] = 0; // filter type 0
    for (let x = 0; x < width; x++) {
      const [r, g, b] = pixelFn(x, y, width, height);
      raw[offset++] = r;
      raw[offset++] = g;
      raw[offset++] = b;
    }
  }

  const idat = zlib.deflateSync(raw);
  const png = Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    pngChunk('IHDR', ihdr),
    pngChunk('IDAT', idat),
    pngChunk('IEND', Buffer.alloc(0)),
  ]);

  fs.writeFileSync(filePath, png);
  console.log('Wrote', filePath, png.length, 'bytes');
}

const galleryDir = 'public/gallery';
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

createPng(`${galleryDir}/placeholder1.png`, 640, 360, (x, y, w, h) => {
  const r = Math.round(190 + 40 * Math.sin(x / 15));
  const g = Math.round(70 + 60 * Math.cos(y / 20));
  const b = Math.round(120 + 80 * ((x + y) / (w + h)));
  return [r, g, b];
});

createPng(`${galleryDir}/placeholder2.png`, 640, 360, (x, y, w, h) => {
  const r = Math.round(90 + 120 * (x / w));
  const g = Math.round(190 + 60 * Math.sin(y / 20));
  const b = Math.round(40 + 140 * (1 - x / w));
  return [r, g, b];
});
