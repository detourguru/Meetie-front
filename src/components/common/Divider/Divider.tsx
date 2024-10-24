import React from "react";

import { cn } from "@/utils/className";

const dividerStyles = {
  direction: {
    horizontal: "w-full h-[1px]",
    vertical: "w-[1px] h-full",
  },
};

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: keyof typeof dividerStyles.direction;
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, direction = "horizontal", ...props }, ref) => {
    const classes = cn(dividerStyles.direction[direction], className);

    return <div className={classes} {...props} ref={ref} />;
  },
);

export default Divider;
