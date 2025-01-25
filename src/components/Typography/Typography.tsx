import {
    TypographyAlign,
    TypographyColor,
    TypographyProps,
    TypographyUnderlineColor,
    TypographyVariant,
    TypographyWeight,
} from "@/components/Typography/Typography.types";
import React from "react";

const Typography = ({
                        variant = "body1",
                        color = "dark",
                        weight = "normal",
                        align = "left",
                        className = "",
                        children,
                        underlineColor,
                    }: TypographyProps) => {
    const variants: Record<TypographyVariant, string> = {
        h1: "text-4xl md:text-5xl lg:text-6xl",
        h2: "text-3xl md:text-4xl lg:text-5xl",
        h3: "text-2xl md:text-3xl lg:text-4xl",
        h4: "text-xl md:text-2xl lg:text-3xl",
        h5: "text-lg md:text-xl lg:text-2xl",
        h6: "text-base md:text-lg lg:text-xl",
        subtitle1: "text-xl",
        subtitle2: "text-lg",
        body1: "text-base",
        body2: "text-sm md:text-base",
        small: "text-xs md:text-sm",
        caption: "text-xs",
        button: "text-sm uppercase tracking-wide",
        overline: "text-xs uppercase tracking-wider",
    };

    const colors: Record<TypographyColor, string> = {
        primary: "text-blue-600 dark:text-blue-400",
        secondary: "text-purple-600 dark:text-purple-400",
        success: "text-green-600 dark:text-green-400",
        error: "text-red-600 dark:text-red-400",
        warning: "text-yellow-600 dark:text-yellow-400",
        info: "text-cyan-600 dark:text-cyan-400",
        light: "text-gray-600 dark:text-gray-300",
        dark: "text-gray-900 dark:text-white",
    };

    const weights: Record<TypographyWeight, string> = {
        thin: "font-thin",
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        extrabold: "font-extrabold",
    };

    const alignments: Record<TypographyAlign, string> = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
    };

    const underlineColors: Record<TypographyUnderlineColor, string> = {
        primary: "bg-primary",
        "primary-100": "bg-primary-100",
        "purple-100": "bg-purple-100",
        secondary: "bg-secondary",
        success: "bg-success",
        error: "bg-error",
        warning: "bg-warning",
        info: "bg-info",
        light: "bg-light",
        dark: "bg-dark",
    };

    const classes = [
        variants[variant],
        colors[color],
        weights[weight],
        alignments[align],
        className,
    ].join(" ");

    return React.createElement(
        variant.startsWith("h") ? variant : "p",
        {
            className: `relative w-fit ${classes}`,
        },
        <>
            <span className="relative z-10">{children}</span>
            {underlineColor && (
                <span
                    className={`absolute inset-x-0 bottom-0 h-[50%] ${underlineColors[underlineColor]}`}
                />
            )}
        </>
    );
};

export default Typography;
