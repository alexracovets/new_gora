import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { MdArrowOutward } from "react-icons/md";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "flex justify-center items-center border-[0.1rem] border-regal-black rounded-[1rem]",
  {
    variants: {
      variant: {
        default: "text-[2.2rem] font-[600] mr-[.8rem]",
        destructive: "",
        outline: "",
        secondary: "",
        ghost: "",
        link: "",
      },
      size: {
        default: "px-[3rem] py-[1.65rem]",
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
        <MdArrowOutward size='2.8rem' className="ml-[.8rem]" />
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
