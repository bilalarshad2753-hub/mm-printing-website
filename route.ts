import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET(req: Request, { params }: { params: any }) {
  try {
    const resolvedParams = await params
    const slug = resolvedParams?.slug || []
    const name = Array.isArray(slug) ? slug.join('/') : String(slug)
    const safeName = decodeURIComponent(name)
    const filePath = path.join(process.cwd(), 'app', 'gallery', safeName)

    if (!fs.existsSync(filePath)) {
      return new NextResponse('Not found', { status: 404 })
    }

    const stat = await fs.promises.stat(filePath)
    const rangeHeader = req.headers.get('range')
    const ext = path.extname(filePath).slice(1).toLowerCase()
    const contentType = ext === 'mp4' ? 'video/mp4' : 'application/octet-stream'

    if (rangeHeader) {
      const bytesPrefix = 'bytes='
      if (!rangeHeader.startsWith(bytesPrefix)) {
        return new NextResponse('Range Not Satisfiable', { status: 416 })
      }

      const range = rangeHeader.substring(bytesPrefix.length)
      const [startStr, endStr] = range.split('-')
      const total = stat.size
      const start = parseInt(startStr, 10) || 0
      const end = endStr ? parseInt(endStr, 10) : total - 1

      if (start >= total || end >= total) {
        return new NextResponse('Range Not Satisfiable', { status: 416 })
      }

      const chunkSize = end - start + 1
      const stream = fs.createReadStream(filePath, { start, end })

      return new NextResponse(stream, {
        status: 206,
        headers: {
          'Content-Range': `bytes ${start}-${end}/${total}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': String(chunkSize),
          'Content-Type': contentType,
        },
      })
    }

    const stream = fs.createReadStream(filePath)
    return new NextResponse(stream, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Length': String(stat.size),
        'Accept-Ranges': 'bytes',
      },
    })
  } catch (err) {
    return new NextResponse('Server error', { status: 500 })
  }
}
