import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
export type ActionButtonProp = ComponentProps<'button'>
const ActionButton = ({ className, children, ...props }: ActionButtonProp) => {
  return (
    <button
      className={twMerge(
        'px-2 py-1 rounded-md border border-zinc-400/50 hover:bg-zinc-600/50 transition=colors duration-75',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default ActionButton
