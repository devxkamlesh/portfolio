import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return <div className={`mx-auto w-[min(1120px,92vw)] ${className ?? ""}`.trim()}>{children}</div>;
}
