import React, { PropsWithChildren } from "react";
import IconButton from "../IconButton";
import { AiOutlinePlus } from "react-icons/ai";

const Expander: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='flex justify-between items-center drop-shadow bg-white rounded-3xl px-6 py-2'>
            {children}
            <IconButton variant='light' className='!text-black'><AiOutlinePlus /></IconButton>
        </div>
    );
};

export default Expander;