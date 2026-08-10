"use client";

import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "icon";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  external?: boolean;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_1px_2px_rgb(0_0_0_/_0.1),0_8px_24px_-12px_rgb(0_0_0_/_0.4)] hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_12px_32px_-12px_rgb(0_0_0_/_0.5)]",
  secondary:
    "border border-border bg-muted text-foreground hover:border-foreground/30 hover:bg-accent/60",
  outline:
    "border border-border bg-transparent text-foreground hover:border-foreground/40 hover:text-primary",
  ghost: "text-muted-foreground hover:bg-muted hover:text-foreground",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 gap-1.5 px-4 text-sm",
  md: "h-11 gap-2 px-6 text-sm",
  lg: "h-12 gap-2 px-7 text-base",
  icon: "size-9 p-0",
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  external = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex select-none items-center justify-center rounded-full font-medium outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {icon}
      {children}
    </>
  );

  if (props.href === undefined) {
    const { onClick, type = "button", ...rest } = props;
    return (
      <button type={type} className={classes} onClick={onClick} {...rest}>
        {content}
      </button>
    );
  }

  const { href, onClick, ...rest } = props;
  return (
    <Link
      href={href}
      className={classes}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
          return;
        onClick?.(event);
      }}
      {...(external ? { rel: "noopener noreferrer", target: "_blank" } : {})}
      {...rest}
    >
      {content}
    </Link>
  );
}
