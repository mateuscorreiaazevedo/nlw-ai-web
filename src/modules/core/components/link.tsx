import { VariantProps, tv } from 'tailwind-variants'
import { IconType } from 'react-icons/lib'
import React from 'react'

const link = tv({
  base: 'w-full relative text-zinc-900 active:opacity-80 transition-all flex items-center justify-around gap-4',
  variants: {
    variant: {
      default: 'hover:underline bg-transparent',
      button: 'bg-zinc-100 rounded-md font-bold text-center hover:bg-zinc-200/50'
    },
    size: {
      base: 'h-fit p-0 text-base',
      large: 'h-12 px-4 text-lg'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'base'
  }
})

const icons = tv({
  base: '',
  variants: {
    iconSize: {
      16: 'text-base',
      18: 'text-lg',
      20: 'text-xl',
      24: 'text-2xl',
      30: 'text-3xl'
    },
    iconColor: {
      default: 'text-zinc-800',
      primary: 'text-violet-500',
      success: 'text-green-500',
      warn: 'text-orange-500',
      error: 'text-red-500'
    }
  },
  defaultVariants: {
    iconSize: 24,
    iconColor: 'default'
  }
})

type LinkProps = React.ComponentProps<'a'> &
  VariantProps<typeof link> &
  VariantProps<typeof icons> & {
    iconLeft?: IconType
    iconLeftClassName?: string
    iconRight?: IconType
    iconRightClassName?: string
  }

export const Link: React.FC<LinkProps> = ({
  variant,
  iconLeft: IconLeft,
  iconRight: IconRight,
  iconSize,
  iconColor,
  iconLeftClassName,
  iconRightClassName,
  size,
  className,
  children,
  ...props
}) => {
  return (
    <a className={link({ className, variant, size })} {...props}>
      {IconLeft && (
        <IconLeft
          className={icons({
            iconSize,
            iconColor,
            className: iconLeftClassName
          })}
        />
      )}
      <span className="flex-1 text-center">{children}</span>
      {IconRight && (
        <IconRight
          className={icons({
            iconSize,
            iconColor,
            className: iconRightClassName
          })}
        />
      )}
    </a>
  )
}
