"use client";
import { useTheme } from "next-themes";
import Button, { ButtonStyle } from "@/app/components/Button";

let dark: boolean = false;
let toggle: string = "dark";

export default function ThemeToggle() {
    const { setTheme } = useTheme();
    function toggleTheme() {
        switch (toggle) {
            case "dark":
                toggle = "light";
                dark = true;
                setTheme("light");
                break;
            case "light":
                toggle = "dark";
                dark = false;
                setTheme("dark");
                break;
            default:
                toggle = "dark";
                dark = false;
                setTheme("dark");
                break;
        }
    }
    return (
        <Button
            href="#"
            text={dark ? "🌙" : "☀️"}
            onClick={toggleTheme}
            style={ButtonStyle.ThemeStyle}
        ></Button>
    );
}
