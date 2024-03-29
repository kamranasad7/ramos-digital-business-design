import Reveal, { Fade } from 'react-awesome-reveal'
import Button from '../../components/UI/Button';
import { Card } from '../../components/UI/Card';
import VisitorsWidget from '../../components/Widgets/VisitorsWidget';
import TotalProfitWidget from '../../components/Widgets/TotalProfitWidget';
import VisitStatsWidget from '../../components/Widgets/VisitStatsWidget';
import TransactionsWidget from '../../components/Widgets/TransactionsWidget';
import { keyframes } from '@emotion/react';
import AvatarWidget from '../../components/Widgets/AvatarWidget';
import { useRef } from 'react';
import useScrollTriggeredCountUp from '../../hooks/useScrollTriggeredCountUp';

const Analytics: React.FC = () => {

    const profile1Animation = keyframes`
    from {
		opacity: 0;
		transform: translate3d(30px, 100px, 0);
	  }
	
	  to {
		opacity: 1;
		transform: translate3d(0, 0, 1);
	  }
    `;

    const profile2Animation = keyframes`
    from {
		opacity: 0;
		transform: translate3d(-30px, 100px, 0);
	  }
	
	  to {
		opacity: 1;
		transform: translate3d(0, 0, 1);
	  }
    `;
    
    const ref = useRef<HTMLSpanElement>(null);
    const count = useScrollTriggeredCountUp(ref, 45); // 0 to 100 count-up

    return (
        <div className='w-full bg-primary-50 rounded-4xl py-20'>

            <div className='grid grid-cols-5 items-center mx-auto max-w-full mb-20'>
                <Fade direction='up' cascade duration={1500} className='text-6xl font-medium col-span-3'>
                    <div>Your key to strategic</div>
                    <div>success through analytics</div>
                </Fade>
                <div className='text-xl text-center col-span-2'>Ready for excting, instantaneous,<br /> all-accessible insights in real time?</div>
            </div>

            <div className='max-w-full mx-auto flex gap-4'>
                <div className='flex flex-[3] flex-col gap-4'>
                    <Card className='rounded-3xl pb-0 pr-0 pt-12 pl-12'>
                        <div className='flex gap-4'>
                            <div className='flex flex-col gap-14 justify-between '>
                                <Button variant='tertiary' className='w-fit h-fit px-4 py-2 shadow-tertiary shadow rounded-lg'>Setting up reports</Button>
                                <div className='flex flex-col gap-4 py-10'>
                                    <span className='font-medium text-2xl'>Fast and easy access to analytics</span>
                                    <span className='text-primary-500'>One platform is a comprehensive system of solutions that will be the first step towards digitalization of your business!</span>
                                </div>
                            </div>
                            <Card className='rounded-2xl rounded-tr-none rounded-bl-none p-3 py-2'>
                                <div className='flex flex-col'>
                                    <span className='text-xl font-semibold'>Sales statistic</span>
                                    <div className='flex gap-2'>
                                        <TotalProfitWidget />
                                        <VisitorsWidget />
                                    </div>

                                    <VisitStatsWidget />

                                </div>
                            </Card>
                        </div>
                    </Card>
                </div>
                <div className='flex flex-[2]'>
                    <Card variant='primary' className='flex flex-col justify-center gap-6 rounded-3xl p-10 px-20'>
                        <div className='flex gap-2 justify-center'>

                            <Reveal keyframes={profile1Animation} duration={1500}>
                                <AvatarWidget />
                            </Reveal>
                            <Reveal keyframes={profile2Animation} duration={1500}>
                                <TransactionsWidget />
                            </Reveal>
                        </div>

                        <span className='text-center text-xl'>Widget Control</span>
                        <span className='text-center text-primary-400 text-sm'>Reports provide a comprehensive overview of important aspects of web analytics</span>
                    </Card>
                </div>
            </div>

            <div className='max-w-full mx-auto px-[15%] mt-20 flex items-center gap-8'>
                <div>
                    <span className='text-xl font-medium text-nowrap'>Up to</span>
                    &nbsp;
                    <span ref={ref} className='text-8xl font-semibold'>{count}%</span>
                </div>
                <Fade direction='up' duration={2000}>
                    <p>Increase your analytics efficiency by up to 45%. Unique algorithms provide insights from data, reduce time for analysis and save time for making imporant, informed decisions</p>
                </Fade>
            </div>
        </div>
    );
};

export default Analytics;
