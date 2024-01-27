import { ComponentProps } from 'react'

export type FileInputControlProps = ComponentProps<'input'>

export function FileInputControl(props: FileInputControlProps) {
  return <input type="file" className="sr-only" id="photo" {...props} />
}
