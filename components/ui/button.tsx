import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { MdArrowOutward } from "react-icons/md";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "flex justify-center items-center border-[0.1rem] border-regal-black",
  {
    variants: {
      variant: {
        default: cn(
          "text-[2.2rem] font-[600] px-[3rem] py-[1.65rem] rounded-[1rem]",
          "max-tablet:text-[1.4rem] max-tablet:px-[1.6rem] max-tablet:py-[.8rem] max-tablet:rounded-[.6rem]",
          "max-mobile:text-[1.4rem] max-mobile:px-[1rem] max-mobile:py-[1rem]"
        ),
        destructive: "",
        outline: "",
        secondary: cn(
          "text-[2.2rem] text-regal-white font-[600] px-[2rem] py-[1rem] border-regal-white rounded-[1rem]",
          "max-mobile:text-[1.4rem] max-mobile:px-[1rem] max-mobile:py-[1rem]"
        ),
        ghost: "",
        link: "",
      },
      size: {
        default: "",
        sm: "",
        lg: "",
        icon: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}>
        {props.children}
        <MdArrowOutward className={cn(
          'w-[2.8rem] h-[2.8rem] ml-[.8rem]',
          'max-tablet:w-[1.6rem] max-tablet:h-[1.6rem] max-tablet:ml-[.4rem]',
          'max-mobile:w-[1.4rem] max-mobile:h-[1.4rem] max-mobile:ml-[.2rem]'
        )} />
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }