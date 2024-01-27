'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from '.'

export type FileInputControlProps = ComponentProps<'input'>

export function FileInputControl(props: FileInputControlProps) {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.length) {
      return
    }

    const files = Array.from(e.target.files)

    onFilesSelected(files)
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      onChange={handleFilesSelected}
      {...props}
    />
  )
}
