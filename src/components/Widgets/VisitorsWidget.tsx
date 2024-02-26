import { FaArrowCircleUp } from 'react-icons/fa';

const VisitorsWidget = () => {
    return (
        <div className='bg-primary-50 rounded-2xl flex flex-col gap-2 flex-1 p-4'>
            <span>Visitors</span>

            <div className='flex'>
                <div className='h-1 rounded-l bg-emerald-500 flex-[3]'></div>
                <div className='h-1 rounded-r bg-primary-200 flex-[7]'></div>
            </div>

            <div className='font-semibold flex gap-1'>
                <span className='text-3xl'>40K</span>
                <div className='text-emerald-500 flex items-start'>
                    <FaArrowCircleUp size={14} />
                    <span className=' text-sm leading-3'>+14%</span>
                </div>
            </div>
        </div>
    );
};

export default VisitorsWidget;
