"use client";

import { useTheme } from "next-themes";
import { lightModeIcon, darkModeIcon } from "@/public/svg-icons";
import Image from "next/image";
import { useEffect, useState } from "react";

const LightOrDarkModeIcon = () => {
  const { theme, setTheme } = useTheme();
  const [iconSrc, setIconSrc] = useState<string>(lightModeIcon);

  useEffect(() => {
    if (theme === "light") {
      setIconSrc(lightModeIcon);
    } else if (theme === "dark") {
      setIconSrc(darkModeIcon);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex h-6 w-6">
      <Image
        src={iconSrc}
        height={24}
        width={24}
        alt={theme === "light" ? "light mode symbol" : "dark mode symbol"}
        className="cursor-pointer"
        onClick={toggleTheme}
      />
    </div>
  );
};

export default LightOrDarkModeIcon;
