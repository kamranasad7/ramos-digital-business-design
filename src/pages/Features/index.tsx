import CustomerServiceWidget from "../../components/Widgets/CustomerServiceWidget";
import { MonitorIndicators } from "../../components/Widgets/MonitorIndicators";

const Features = () => {
    return (
        <div className='max-w-full mx-auto flex flex-col gap-20'>
            <h1 className='text-9xl'>We give you full <span className='text-primary-200'>control</span> over your data</h1>

            <div className='grid grid-cols-2 w-full gap-4'>
                <CustomerServiceWidget />
                <MonitorIndicators />
            </div>

        </div>
    );
};

export default Features;
