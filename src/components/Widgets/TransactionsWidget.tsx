import { FaArrowCircleUp } from "react-icons/fa";
import { Card } from "../UI/Card";

const TransactionsWidget = () => {
    return (
        <Card variant='primary' className='flex flex-col gap-2 justify-between items-center bg-primary-900 border border-primary-900'>
            <span className='text-xs'>Transactions</span>
            <div className='text-emerald-500 flex self-end'>
                <FaArrowCircleUp size={12} />
                <span className=' text-xs leading-3'>+14%</span>
            </div>
            <span className='font-semibold text-2xl'>&nbsp; 37%</span>
        </Card>
    );
};

export default TransactionsWidget;
