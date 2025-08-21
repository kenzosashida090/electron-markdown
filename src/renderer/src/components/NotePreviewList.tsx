import { notesMock } from '@/store/mocks'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import NotePreview from './NotePreview'

const NotePreviewList = ({ className, ...props }: ComponentProps<'ul'>) => {
  if (notesMock.length === 0) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }
  return (
    <ul {...props}>
      {notesMock.map((el) => (
        <>
          <NotePreview key={el.lastEditTime + el.title} {...el} />
        </>
      ))}
    </ul>
  )
}

export default NotePreviewList
