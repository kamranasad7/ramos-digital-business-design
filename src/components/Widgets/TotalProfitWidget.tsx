import { BsStack } from "react-icons/bs";
import IconButton from "../UI/IconButton";
import useScrollTriggeredCountUp from "../../hooks/useScrollTriggeredCountUp";
import { useRef } from "react";

const TotalProfitWidget = () => {
    
    const ref = useRef<HTMLSpanElement>(null);
    const count = useScrollTriggeredCountUp(ref, 2642); // 0 to 100 count-up

    return (
        <div className='flex gap-2 items-center'>
            <IconButton variant='secondary' className='w-fit h-fit'>
                <BsStack className='text-white' />
            </IconButton>

            <div className='flex flex-col'>
                <span className='text-primary-400'>Total profit</span>
                <div className='font-semibold flex text-xl items-end gap-1'>$ <span ref={ref} className='text-3xl w-16'>{count}</span>K</div>
            </div>
        </div>
    );
};

export default TotalProfitWidget;
