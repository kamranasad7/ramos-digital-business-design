import { Fade } from 'react-awesome-reveal'
import Button from '../../components/UI/Button';
import { Card } from '../../components/UI/Card';
import VisitorsWidget from '../../components/Widgets/VisitorsWidget';
import TotalProfitWidget from '../../components/Widgets/TotalProfitWidget';
import VisitStatsWidget from '../../components/Widgets/VisitStatsWidget';
import TransactionsWidget from '../../components/Widgets/TransactionsWidget';

const Analytics: React.FC = () => {



    
    return (
        <div className='w-full bg-primary-50 rounded-4xl py-20'>

            <div className='grid grid-cols-5 items-center mx-auto max-w-full mb-20'>
                <div className='text-6xl font-medium col-span-3'>Your key to strategic<br /> success through analytics</div>
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
                            <Fade direction='up' duration={2500}>
                                <TransactionsWidget />
                            </Fade>
                            <Fade direction='up' duration={2500}>
                                <TransactionsWidget />
                            </Fade>
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
                    <span className='text-8xl font-semibold'>45%</span>
                </div>
                <p>Increase your analytics efficiency by up to 45%. Unique algorithms provide insights from data, reduce time for analysis and save time for making imporant, informed decisions</p>
            </div>
        </div>
    );
};

export default Analytics;
