import {ElementType, ReactNode} from 'react';

type ListType = 'unordered' | 'ordered';
type BulletStyle = 'disc' | 'circle' | 'square' | 'decimal' | 'none';
type ListSpacing = 'none' | 'tight' | 'normal' | 'relaxed';

interface LinkContent {
  type: 'link';
  href: string;
  text: string;
  target?: string;
}

interface ComponentContent {
  type: 'component';
  component: ElementType;
  props: Record<string, string>;
}

export type ListLink = LinkContent;
export type ListComponent = ComponentContent;
export type Content = ReactNode | LinkContent | ComponentContent;

export type ListItem = {
  content: Content;
  className?: string;
}

export type ListProps = {
  items: (ListItem | Content)[];
  type?: ListType;
  bulletStyle?: BulletStyle;
  spacing?: ListSpacing;
  className?: string;
  nested?: boolean;
}

export type ListItemProps = {
  children: ReactNode;
  className?: string;
}
