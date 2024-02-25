import { PropsWithChildren } from "react";

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'light';
export type ButtonType = React.FC<PropsWithChildren<ButtonProps>>

const buttonStyles: Record<ButtonVariant, string> = {
    primary: 'bg-primary text-primary-100',
    secondary: 'bg-secondary text-white',
    tertiary: 'bg-tertiary text-primary',
    light: 'bg-primary-100 text-secondary',
};

interface ButtonProps {
    variant?: ButtonVariant;
    className?: string;
}

const Button: ButtonType = (props) => {
    const {
        variant = 'primary',
        className,
        children,
     } = props;
    return (
        <button className={`rounded-full p-4 ${buttonStyles[variant]} ${className}`}>{children}</button>
    )
}

export default Button