import {ReactNode} from "react";
import Link from "next/link";
import {Content, ListComponent, ListItem, ListItemProps, ListLink, ListProps} from "@/components/List/List.types";

const ListItemComponent = ({children, className = ''}: ListItemProps) => (
    <li className={`marker:text-orange ${className}`}>
        {children}
    </li>
);

export const List = ({
                         items,
                         type = 'unordered',
                         bulletStyle = 'disc',
                         spacing = 'normal',
                         className = '',
                         nested = false,
                     }: ListProps) => {
    const Element = type === 'unordered' ? 'ul' : 'ol';

    const bulletStyles = {
        disc: 'list-disc',
        circle: 'list-circle',
        square: 'list-square',
        decimal: 'list-decimal',
        none: 'list-none',
    };

    const spacingStyles = {
        tight: 'space-y-1',
        normal: 'space-y-2',
        relaxed: 'space-y-4',
        none: '',
    };

    const baseClasses = [
        bulletStyles[bulletStyle],
        spacingStyles[spacing],
        nested ? 'ml-4' : 'ml-5',
        className,
    ].join(' ');

    const isLink = (content: Content): content is ListLink => {
        return content !== null && typeof content === 'object' && 'type' in content && content.type === 'link';
    }

    const isComponent = (content: Content): content is ListComponent => {
        return content !== null && typeof content === 'object' && 'type' in content && content.type === 'component';
    }

    const renderContent = (content: Content): ReactNode => {
        if (isLink(content)) {
            return (
                <Link
                    href={content.href}
                    target={content.target}
                    className="text-white hover:text-orange"
                >
                    {content.text}
                </Link>
            );
        }
        if (isComponent(content)) {
            const Component = content.component;

            return <Component {...content.props} />;
        }

        return content;
    };

    const renderItem = (item: ListItem | Content, index: number) => {
        if (item && typeof item === 'object' && 'content' in item) {
            return (
                <ListItemComponent key={index} className={item.className}>
                    {renderContent(item.content)}
                </ListItemComponent>
            );
        }
        return (
            <ListItemComponent key={index}>
                {renderContent(item)}
            </ListItemComponent>
        );
    };

    return (
        <Element className={baseClasses}>
            {items.map((item, index) => renderItem(item, index))}
        </Element>
    );
};

export default List;
