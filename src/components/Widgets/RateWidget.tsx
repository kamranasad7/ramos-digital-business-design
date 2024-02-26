import { TbHexagonPlus2 } from "react-icons/tb";

const RateWidget = () => {
    return (
        <div className='bg-secondary text-white rounded-2xl p-4 self-end flex-1'>
            <div className='flex justify-between items-center'>
                <span>Rate</span>
                <TbHexagonPlus2 />
            </div>
            <span className='font-semibold text-2xl'>&nbsp; 37%</span>
        </div>
    );
};

export default RateWidget;
