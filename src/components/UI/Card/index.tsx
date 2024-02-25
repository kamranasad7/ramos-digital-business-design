import { PropsWithChildren } from "react";

type CardVariant = 'primary' | 'secondary' | 'tertiary' | 'light';
export type CardType = React.FC<PropsWithChildren<CardProps>>;

const cardStyles: Record<CardVariant, string> = {
    primary: '',
    secondary: '',
    tertiary: '',
    light: 'bg-white border border-gray-200',
}

interface CardProps {
    variant?: CardVariant;
    className?: string;
    children?: React.ReactNode;
};

export const Card: CardType = (props) => {
    const {
        variant = 'light',
        className,
        children
    } = props;
  return (
    <div className={`p-6 ${cardStyles[variant]} ${className}`}>{children}</div>
  );
};