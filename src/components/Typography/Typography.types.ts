import {ReactNode} from "react";

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline';
type Color = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'light' | 'dark';
type Weight = 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
type Align = 'left' | 'center' | 'right' | 'justify';

export type TypographyProps = {
    variant?: Variant;
    color?: Color;
    weight?: Weight;
    align?: Align;
    className?: string;
    children: ReactNode;
}
