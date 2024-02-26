import React from "react";

interface ButtonGroupButton {
    text: string;
    onClick?: () => void;
}

interface ButtonGroupProps {
    buttons: ButtonGroupButton[];
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => {
    return (
        <div className='text-primary-200 [&>*:first-child]:rounded-l-xl [&>*:last-child]:rounded-r-xl'>
            {buttons.map((b, i) => (
                <button
                    key={i}
                    onClick={() => b.onClick?.()}
                    className='bg-primary-medium rounded-none border-0 ring-0 focus:outline-0 hover:bg-primary-800 py-4 font-normal text-sm transition-all duration-200'
                >
                    {b.text}
                </button>
            ))}
        </div>
    );
};

export default ButtonGroup;