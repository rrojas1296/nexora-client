import { cn } from "cn";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}
const Card = ({ children, className }: Props) => {
  return (
    <div className={cn("rounded-3xl border border-border-muted py-4 px-5 bg-surface", className)}>
      {children}
    </div>
  );
};

export default Card;
