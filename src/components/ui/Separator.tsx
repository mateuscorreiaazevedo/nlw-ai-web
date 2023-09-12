import React from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const separatorStyles = tv({
  base: 'bg-transparent',
  variants: {
    orientation: {
      horizontal: 'h-px min-w-full',
      vertical: 'w-px min-h-full'
    },
    color: {
      primary: 'dark:bg-zinc-800 bg-zinc-400'
    }
  },
  defaultVariants: {
    orientation: 'horizontal',
    color: 'primary'
  }
})

type SeparatorProps = VariantProps<typeof separatorStyles> & {
  className?: string
}

export const Separator: React.FC<SeparatorProps> = ({
  orientation,
  className,
  color
}) => {
  return <div className={separatorStyles({ className, orientation, color })} />
}
