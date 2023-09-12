import { radiusVariants } from '@/assets/styles'
import React from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const textareaStyles = tv({
  base: 'flex min-h-[60px] w-full border leading-relaxed transition-colors border-zinc-800 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-zinc-600 outline-none ring-2 ring-transparent focus-visible:ring-zinc-800 disabled:cursor-not-allowed disabled:opacity-50',
  extend: radiusVariants,
  defaultVariants: {
    radius: 'md'
  }
})

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof textareaStyles> & {
    className?: string
    radius?: VariantProps<typeof radiusVariants>['radius']
    label?: string
  }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { label, className, radius, ...rest } = props
    const hasLabel = Boolean(label)
    const Tag = hasLabel ? 'label' : React.Fragment

    return (
      <Tag className="flex flex-col gap-2 text-xs font-semibold dark:text-zinc-400">
        {label}
        <textarea
          className={textareaStyles({
            radius,
            className
          })}
          ref={ref}
          {...rest}
        />
      </Tag>
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea }
