"use client";

import { usePathname } from "next/navigation";
import Button from "@/app/components/Button";

export default function NavClient() {
  const isHome = usePathname() === "/";

  return (
    <nav className="nav-nav">
      <br />
      {!isHome && (
        <>
          <Button
            className="rounded-xs text-xl nav-a ml-4"
            href="/"
            text="⬅ Volver"
          />
          <span className="ml-2">|</span>
        </>
      )}

      <Button
        className="rounded-xs text-xl nav-a mx-2"
        href="https://github.com/nnachonesa"
        text="🖥️ Github"
      />
      <span>|</span>

      <Button
        href="/#projects"
        text="📁 Proyectos"
        className="rounded-xs text-xl nav-a ml-2"
      />
      <span className="ml-2">|</span>

      <Button
        href="/#skills"
        text="📋 Tecnologias"
        className="rounded-xs text-xl nav-a ml-2"
      />
      <span className="ml-2">|</span>

      <Button
        href="/blog"
        text="✍ Blog"
        className="rounded-xs text-xl nav-a ml-2"
      />
      <br />
      <br />
    </nav>
  );
}
