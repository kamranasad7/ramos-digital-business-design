import { FaArrowCircleUp } from "react-icons/fa";
import { Card } from "../UI/Card";

const TransactionsWidget = () => {
    return (
        <Card variant='primary' className='flex flex-col gap-2 rounded-3xl min-w-36 justify-between shadow-[-1px_-1px_3px_rgba(255,255,255,0.4)] bg-primary-900 border-0 border-primary-400'>
            <span className='text-sm'>Transactions</span>
            <div className='text-emerald-500 flex self-end'>
                <FaArrowCircleUp size={14} />
                <span className='text-sm leading-3'>+14%</span>
            </div>
            <span className='font-semibold text-4xl'>38K</span>
        </Card>
    );
};

export default TransactionsWidget;
