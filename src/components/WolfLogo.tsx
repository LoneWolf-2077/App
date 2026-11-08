import React from "react";
import monogramImg from "../assets/images/Monogram.png";

interface WolfLogoProps {
  className?: string; // Tailwind styling support
  size?: number | string; // Width/height multiplier
}

export default function WolfLogo({ className = "w-10 h-10", size }: WolfLogoProps) {
  const widthHeight = size ? size : undefined;

  return (
    <img
      id="lonewolf-wolf-logo"
      src={monogramImg}
      alt="Lonewolf Monogram Logo"
      className={`${className} object-contain`}
      style={widthHeight ? { width: widthHeight, height: widthHeight } : undefined}
      referrerPolicy="no-referrer"
    />
  );
}
