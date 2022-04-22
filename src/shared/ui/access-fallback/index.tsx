import { Children, cloneElement, isValidElement, ReactNode } from "react";
import classes from "./access-fallback.module.css";

type AccessFallbackProps = {
  children: ReactNode;
  requiredPermissions: string[];
};
export function AccessFallback({ children, requiredPermissions }: AccessFallbackProps) {
  const message = `Access denied! You don't have required permissions: ${requiredPermissions.join(", ")}`;
  return (
    <span title={message} className={classes.root}>
      {Children.toArray(children).map((child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { disabled: true });
        }
      })}
    </span>
  );
}
