import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
} // this allows to combine classes to tailwind, this process will reduce the tailwind classnames
