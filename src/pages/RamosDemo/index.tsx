import { TextSliderUpper } from "../../components/TextSlider";
import Expander from "../../components/UI/Expander";
import { Slide } from 'react-awesome-reveal';

const RamosDemo: React.FC = () => {
    return (
        <div className='w-full bg-primary-50 rounded-4xl pt-24'>
            <div className='flex gap-10 ml-[160px] relative'>
                <div className='flex flex-col gap-10'>
                    <Slide direction="up">
                        <p className='font-medium text-6xl'>Turning data into real</p>
                    </Slide>
                    <Slide direction="up">
                        <p className='font-medium text-6xl'>actions and ideas.</p>
                    </Slide>


                    <div className='flex flex-col gap-4 pr-52'>
                        <Slide direction="up">
                            <Expander><span className='text-lg'>Instant Insights</span></Expander>
                            <Expander><span className='text-lg'>AI Technology</span></Expander>
                            <Expander><span className='text-lg'>Easy Integration</span></Expander>
                        </Slide>
                    </div>

                </div>
                <Slide direction="up" duration={3000} delay={-1500}>
                    <img src='ramos_web.png' alt='' />
                </Slide>
                <img className='absolute left-[38%] top-[30%] z-50' src='ramos_mobile.png' alt='' />

            </div>
            <div className='-z-10'>
                <TextSliderUpper
                    text="Ramos"
                    className='flex pl-40 pb-24 text-center text-secondary font-semibold text-[25vw] leading-[22vw] bg-[length:120px_120px]'
                    style={{ backgroundImage: 'linear-gradient(to right, #e7e7e7 1px, transparent 1px), linear-gradient(to bottom, #e7e7e7 1px, transparent 1px)' }}
                />

            </div>

        </div>
    );
};

export default RamosDemo;
