import * as React from "react";

import { cn } from "@/lib/utils";

const Section = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn(
      "bg-background text-foreground py-10 sm:py-22 sm:pt-5 md:py-32 md:pt-14 px-4",
      className
    )}
    {...props}
  />
));
Section.displayName = "Section";

export { Section };
