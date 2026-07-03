"use client"
import React, { useEffect, useRef, useState } from 'react'

type Props = {
  src: string
  poster?: string
  ariaLabel?: string
  className?: string
}

export default function VideoPlayer({ src, poster, ariaLabel, className }: Props) {
  const ref = useRef<HTMLVideoElement | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onError = () => {
      const err = el.error
      let msg = 'Unknown video error'
      if (err) {
        // MediaError codes: 1-4
        msg = `MediaError code=${err.code}`
        if ((err as any).message) msg += ` message=${(err as any).message}`
      }
      console.error('VideoPlayer error', msg, { src })
      setErrorMsg(msg)
    }

    const onPlay = () => setErrorMsg(null)

    el.addEventListener('error', onError)
    el.addEventListener('play', onPlay)

    return () => {
      el.removeEventListener('error', onError)
      el.removeEventListener('play', onPlay)
    }
  }, [src])

  return (
    <div className={className ?? ''}>
      <video ref={ref} controls poster={poster} className="w-full h-full min-h-[280px] object-cover" aria-label={ariaLabel} preload="metadata" playsInline>
        <source src={src} type="video/mp4" />
      </video>
      {errorMsg && (
        <div className="mt-3 rounded-md bg-red-900/80 p-3 text-sm text-white">
          <div>Video failed to play: {errorMsg}</div>
          <div className="mt-2 flex gap-2">
            <a href={src} target="_blank" rel="noreferrer" className="underline">Open raw video</a>
            <a href={src} download className="underline">Download</a>
          </div>
        </div>
      )}
    </div>
  )
}
