import Expander from "../../components/UI/Expander";

const RamosDemo: React.FC = () => {
    return (
        <div className='w-full bg-primary-50 rounded-4xl pt-24'>
            <div className='flex gap-10 ml-[160px] relative'>
                <div className='flex flex-col gap-32'>
                    <p className='font-medium text-6xl'>Turning data into real actions and ideas.</p>

                    <div className='flex flex-col gap-4 pr-52'>
                        <Expander><span className='text-lg'>Instant Insights</span></Expander>
                        <Expander><span className='text-lg'>AI Technology</span></Expander>
                        <Expander><span className='text-lg'>Easy Integration</span></Expander>
                    </div>
                    
                </div>
                <img src='ramos_web.png' alt='' />

                <img className='absolute left-[38%] top-[30%]' src='ramos_mobile.png' alt='' />
            </div>

            <h1 className='pb-24 text-center text-secondary font-semibold text-[25vw] leading-[22vw] bg-[length:120px_120px]' style={{ backgroundImage: 'linear-gradient(to right, #e7e7e7 1px, transparent 1px), linear-gradient(to bottom, #e7e7e7 1px, transparent 1px)' }}>
                Ramos
            </h1>
        </div>
    );
};

export default RamosDemo;
