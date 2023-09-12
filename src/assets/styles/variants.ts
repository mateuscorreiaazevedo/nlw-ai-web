import { tv } from 'tailwind-variants'

export const radiusVariants = tv({
  variants: {
    radius: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      none: 'rounded-none'
    }
  }
})
