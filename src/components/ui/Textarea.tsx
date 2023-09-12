import { VariantProps, tv } from 'tailwind-variants'
import { radiusVariants } from '@/assets/styles'
import React from 'react'

const textareaStyles = tv({
  base: 'flex flex-1 min-h-[60px] w-full border leading-relaxed transition-colors border-zinc-800 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-zinc-600 outline-none ring-2 ring-transparent focus-visible:ring-zinc-800 disabled:cursor-not-allowed disabled:opacity-50',
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

    const inputId = React.useId()

    return (
      <div data-label={hasLabel} className="flex flex-col data-[label=true]:gap-2">
        {hasLabel && (
          <label
            htmlFor={inputId}
            className="cursor-pointer text-xs font-semibold text-muted-foreground transition-colors hover:text-muted-foreground/80"
          >
            {label}
          </label>
        )}
        <textarea
          id={inputId}
          className={textareaStyles({
            radius,
            className
          })}
          ref={ref}
          {...rest}
        />
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea }
