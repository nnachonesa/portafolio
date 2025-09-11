"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Howl } from "howler";

const soundClick = new Howl({
  src: ["/assets/sfx/click.wav"],
  volume: 0.2,
});

export enum ButtonStyle {
  Unstyled = 0,
  ThemeStyle,
  Primary,
}

export default function Button({
  text,
  href,
  className,
  icon,
  onClick,
  id,
  style,
}: {
  text: any;
  href: string;
  className?: string;
  icon?: string;
  onClick?: () => void;
  id?: string;
  style?: ButtonStyle;
}) {
  const playSound = () => {
    if (onClick) onClick();
    soundClick.play();
  };

  if (onClick) {
    let href = null;
  }
  let [classes, setClasses] = useState("");

  useEffect(() => {
    let temp = "";
    if (className) temp += className + " ";

    switch (style) {
      case ButtonStyle.ThemeStyle:
        temp +=
          "absolute top-4 right-4 z-50 text-2xl p-2 rounded-full hover:scale-105 transition-transform";
        break;
    }

    setClasses(temp);
  }, [className, style]);
  return (
    <Link href={href} onClick={playSound} id={id} className={classes}>
      {icon && <i className={icon}></i>}
      {text}
    </Link>
  );
}
