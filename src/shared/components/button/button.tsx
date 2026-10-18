import { cva, VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { ComponentProps } from "react";

const buttonVariants = cva(
  "h-9 rounded-xl cursor-pointer focus-visible:ring-2 text-sm focus-visible:ring-ring focus-visible:outline-none flex justify-center items-center transition-colors active:translate-y-px",
  {
    variants: {
      variant: {
        filled: "bg-primary-500 text-foreground-inverse",
        icon: "size-9 text-muted-foreground hover:text-foreground",
      },
    },
    defaultVariants: { variant: "filled" },
  },
);
interface Props extends ComponentProps<"button">, VariantProps<typeof buttonVariants> {}
const Button = ({ children, className, variant, ...props }: Props) => {
  return (
    <button className={cn(buttonVariants({ className, variant }))} {...props}>
      {children}
    </button>
  );
};

export default Button;
