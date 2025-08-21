import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const RootLayout = ({ children, className, ...props }: ComponentProps<'main'>) => {
  return (
    <main className={twMerge('flex flex-row h-screen', className)} {...props}>
      {children}
    </main>
  )
}

export const Sidebar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside
      className={twMerge('w-[250px] mt-10 h-[100vh + 90px] overflow-auto ', className)}
      {...props}
    >
      {children}
    </aside>
  )
}
export const FileSidebar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside
      className={twMerge('w-[184px] mt-10 h-[100vh + 90px] overflow-auto ', className)}
      {...props}
    >
      {children}
    </aside>
  )
}
export const Header = ({ className, children, ...props }: ComponentProps<'header'>) => {
  return (
    <header className={twMerge('d-flex w-full  ', className)} {...props}>
      {children}
    </header>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>((props, ref) => {
  const { children, className, ...rest } = props
  return (
    <div ref={ref} className={twMerge('flex-1 overflow-auto', className)} {...rest}>
      {children}
    </div>
  )
})

Content.displayName = 'Content'
