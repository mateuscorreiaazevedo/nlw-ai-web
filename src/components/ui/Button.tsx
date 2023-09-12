import { VariantProps, tv } from 'tailwind-variants'
import React from 'react'
import { radiusVariants } from '@/assets/styles'

const buttonStyle = tv({
  base: 'transition-all flex items-center ring-2 ring-transparent justify-center gap-2 active:opacity-95 cursor-pointer border border-transparent outline-none',
  extend: radiusVariants,
  variants: {
    color: {
      primary:
        'bg-zinc-950 hover:bg-zinc-900 text-white dark:bg-zinc-50 dark:hover:bg-zinc-200 dark:text-zinc-800',
      outline:
        'bg-transparent border-zinc-400 focus-visible:ring-zinc-800 focus-visible:border-zinc-200 hover:bg-zinc-100 focus-visible:bg-zinc-100 dark:focus-visible:bg-zinc-900 dark:border-zinc-600 dark:hover:bg-zinc-900 text-zinc-800 dark:text-zinc-100'
    },
    size: {
      xs: 'text-xs px-1 py-0.5',
      sm: 'text-sm px-2 py-1',
      md: 'text-base px-3 py-1.5',
      lg: 'text-lg px-4 py-2',
      xl: 'text-xl px-6 py-3',
      square: 'p-4 w-10 h-10'
    }
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
    radius: 'md'
  }
})

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyle> & {
    className?: string
    radius?: VariantProps<typeof radiusVariants>['radius']
  }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, color, size, radius, ...rest } = props
  return (
    <button
      className={buttonStyle({ className, color, radius, size })}
      {...rest}
      ref={ref}
    />
  )
})

Button.displayName = 'Button'

export { Button }
