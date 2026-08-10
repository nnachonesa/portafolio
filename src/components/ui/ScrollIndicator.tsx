export function ScrollIndicator() {
  return (
    <a
      href="#proyectos"
      aria-label="proyectos"
      className="group absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
    >
      <span className="flex h-10 w-6 justify-center rounded-full border-2 border-muted-foreground/60 pt-1.5 transition-colors group-hover:border-foreground">
        <span className="size-1.5 animate-scroll-dot rounded-full bg-foreground" />
      </span>
    </a>
  );
}
