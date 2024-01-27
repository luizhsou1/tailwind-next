import { ComponentProps } from 'react'

export type FileInputProps = ComponentProps<'div'>

export function FileInput(props: FileInputProps) {
  return <div {...props} />
}

export * from './Control'
export * from './ImagePreview'
export * from './Trigger'
