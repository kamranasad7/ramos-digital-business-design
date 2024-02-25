import { PropsWithChildren } from "react";

type IconButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'light';
export type IconButtonType = React.FC<PropsWithChildren<IconButtonProps>>

const iconButtonStyles: Record<IconButtonVariant, string> = {
    primary: 'bg-primary text-primary-100',
    secondary: 'bg-secondary text-white',
    tertiary: 'bg-tertiary text-primary',
    light: 'bg-primary-100 text-secondary',
};

interface IconButtonProps {
    variant?: IconButtonVariant;
    className?: string;
}

const IconButton: IconButtonType = (props) => {
    const {
        variant = 'primary',
        className,
        children,
     } = props;
    return (
        <button className={`rounded-full p-4 ${iconButtonStyles[variant]} ${className}`}>{children}</button>
    )
}

export default IconButton