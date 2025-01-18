import { ReactNode } from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline';
type Color = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'light' | 'dark';
type Weight = 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
type Align = 'left' | 'center' | 'right' | 'justify';

interface TypographyProps {
    variant?: Variant;
    color?: Color;
    weight?: Weight;
    align?: Align;
    className?: string;
    children: ReactNode;
}

const Typography = ({
                        variant = 'body1',
                        color = 'dark',
                        weight = 'normal',
                        align = 'left',
                        className = '',
                        children,
                    }: TypographyProps) => {
    const variants = {
        h1: 'text-4xl md:text-5xl lg:text-6xl',
        h2: 'text-3xl md:text-4xl lg:text-5xl',
        h3: 'text-2xl md:text-3xl lg:text-4xl',
        h4: 'text-xl md:text-2xl lg:text-3xl',
        h5: 'text-lg md:text-xl lg:text-2xl',
        h6: 'text-base md:text-lg lg:text-xl',
        subtitle1: 'text-xl',
        subtitle2: 'text-lg',
        body1: 'text-base',
        body2: 'text-sm',
        caption: 'text-xs',
        button: 'text-sm uppercase tracking-wide',
        overline: 'text-xs uppercase tracking-wider',
    };

    const colors = {
        primary: 'text-blue-600 dark:text-blue-400',
        secondary: 'text-purple-600 dark:text-purple-400',
        success: 'text-green-600 dark:text-green-400',
        error: 'text-red-600 dark:text-red-400',
        warning: 'text-yellow-600 dark:text-yellow-400',
        info: 'text-cyan-600 dark:text-cyan-400',
        light: 'text-gray-600 dark:text-gray-300',
        dark: 'text-gray-900 dark:text-white',
    };

    const weights = {
        thin: 'font-thin',
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
    };

    const alignments = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify',
    };

    const Element = variant.startsWith('h') ? variant : 'p';

    const classes = [
        variants[variant],
        colors[color],
        weights[weight],
        alignments[align],
        className,
    ].join(' ');

    return (
        <Element className={classes}>
            {children}
        </Element>
    );
};

export default Typography;
