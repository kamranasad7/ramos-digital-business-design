import RateWidget from "./RateWidget";

const VisitStatsWidget = () => {
    return (
        <div className='flex flex-col gap-4'>
            <span className='text-sm font-medium'>Visit Statistics</span>

            <div className='flex gap-2'>
                <img className='min-w-0 flex-[2]' src='chart.png' alt='' />
                <RateWidget />
            </div>
        </div>
    );
};

export default VisitStatsWidget;