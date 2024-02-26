import { BsStack } from "react-icons/bs";
import IconButton from "../UI/IconButton";

const TotalProfitWidget = () => {
    return (
        <div className='flex gap-2 items-center'>
            <IconButton variant='secondary' className='w-fit h-fit'>
                <BsStack className='text-white' />
            </IconButton>

            <div className='flex flex-col'>
                <span className='text-primary-400'>Total profit</span>
                <div className='font-semibold flex text-xl items-end gap-1'>$ <span className='text-3xl'>264,2K</span></div>
            </div>
        </div>
    );
};

export default TotalProfitWidget;
