import React from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const linkButton = tv({
  base: 'w-full text-zinc-900 active:opacity-80 transition-all',
  variants: {
    variant: {
      default: 'hover:underline',
      button:
        'bg-zinc-100 rounded-md font-bold hover:bg-zinc-200/50 flex items-center justify-center gap-4'
    },
    size: {
      base: 'h-fit p-0 text-base',
      lg: 'h-12 px-2 text-lg'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'base'
  }
})

type LinkButtonProps = React.ComponentProps<'a'> & VariantProps<typeof linkButton>

export const LinkButton: React.FC<LinkButtonProps> = ({
  variant,
  size,
  className,
  ...props
}) => {
  return <a className={linkButton({ className, variant, size })} {...props} />
}
