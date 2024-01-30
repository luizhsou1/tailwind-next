'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'

import { FileInputItem, useFileInput } from '.'

export function FileInputList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => (
        <FileInputItem key={file.name} name={file.name} size={file.size} />
      ))}
    </div>
  )
}
