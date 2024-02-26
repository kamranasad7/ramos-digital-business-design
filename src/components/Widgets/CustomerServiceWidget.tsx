import { FaChartLine } from "react-icons/fa";
import { Card } from "../UI/Card";
import Avatar from "../UI/Avatar";
import { keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";

const CustomerServiceWidget = () => {

    const conversionRateAnimation = keyframes`
    from {
        opacity: 0;
        transform: translate3d(50px, 20px, 0);
      }
    
      to {
        opacity: 1;
        transform: translate3d( 0, 0, 1);
      }
    `;

    const engagementRateAnimation = keyframes`
    from {
        opacity: 0;
        transform: translate3d(-50px, 20px, 0);
      }
    
      to {
        opacity: 1;
        transform: translate3d( 0, 0, 1);
      }
    `;

    return (
        <Card className='!bg-primary-50 w-full relative pb-0 px-0'>
            <div className='flex flex-col items-center gap-8 w-full min-h-[35rem] h-full relative'>
                {/* <div className="absolute w-1/3 h-full z-10" style={{ backgroundImage: 'linear-gradient(to right, #e7e7e7 1px, transparent 1px), linear-gradient(to bottom, #e7e7e7 1px, transparent 1px)' }}></div> */}
                <div className='flex relative w-full'>
                    <Reveal keyframes={conversionRateAnimation} duration={1500}>
                        <div className='bg-white left-[4.4rem] absolute rounded-2xl flex flex-col gap-4 items-center drop-shadow-lg p-8 w-64 justify-center h-72'>
                            <span>Conversion rate</span>
                            <div className='relative bg-tertiary font-medium text-5xl rounded-2xl p-4'>
                                <div className='absolute -top-4 -left-4 p-2 bg-white rounded-full drop-shadow border-[5px] border-primary-100 text-primary-700'>
                                    <FaChartLine size={12} />
                                </div>
                                <span>2,3%</span>
                            </div>
                            <span className='text-primary-400'>Percentage of<br /> website visitors</span>
                        </div>
                    </Reveal>

                    <Reveal keyframes={engagementRateAnimation} duration={1500}>
                        <div className='absolute left-[17.9rem] top-10 whitespace-nowrap bg-white rounded-2xl flex flex-col gap-4 p-6 drop-shadow-lg justify-end w-64 h-72'>
                            <span className='text-2xl'>$ <span className='text-4xl'>131,2K</span></span>

                            <div className='flex gap-0.5'>
                                <div className='h-1.5 rounded bg-emerald-500 flex-[2]'></div>
                                <div className='h-1.5 rounded bg-tertiary flex-[1.9]'></div>
                                <div className='h-1.5 rounded bg-purple-500 flex-[2]'></div>
                            </div>

                            <div className='flex justify-between items-center gap-8'>
                                <div className='flex items-center gap-2'>
                                    <Avatar src='profile1.png' />
                                    <span className='text-primary-300'>Min. price</span>
                                </div>
                                <span className="font-semibold">1,200 $</span>
                            </div>

                            <div className='flex justify-between items-center gap-8'>
                                <div className='flex items-center gap-2'>
                                    <Avatar src='profile2.jpg' />
                                    <span className='text-primary-300'>Min. price</span>
                                </div>
                                <span className="font-semibold">2,320 $</span>
                            </div>

                            <hr />
                            <div className='flex justify-between items-center gap-8'>
                                <span className='text-primary-300'>Engagement rate</span>
                                <span>47,84%</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="flex justify-end flex-col h-full w-full bg-[length:120px_120px]" style={{ backgroundImage: 'linear-gradient(to right, #e7e7e7 1px, transparent 1px), linear-gradient(to bottom, #e7e7e7 1px, transparent 1px)' }}>
                    <div className="flex flex-col h-fit gap-6 items-center p-4 bg-primary-50 w-full rounded-b-2xl drop-shadow-2xl">
                        <span className='text-2xl font-medium'>Improved customer service</span>
                        <p className="px-[6.7rem] text-center">Analytics helps optimize service processes by providing information on how to improve interactions with customers and increase their satisfaction</p>
                    </div>
                </div>
            </div>

        </Card>
    );
};

export default CustomerServiceWidget;
