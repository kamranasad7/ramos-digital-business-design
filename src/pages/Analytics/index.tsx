import { BsStack } from 'react-icons/bs';
import { FaArrowCircleUp } from "react-icons/fa";

import Button from '../../components/UI/Button';
import { Card } from '../../components/UI/Card';
import IconButton from '../../components/UI/IconButton';
import VisitorsWidget from '../../components/Widgets/VisitorsWidget';
import TotalProfitWidget from '../../components/Widgets/TotalProfitWidget';
import VisitStatsWidget from '../../components/Widgets/VisitStatsWidget';
import TransactionsWidget from '../../components/Widgets/TransactionsWidget';

export const Analytics: React.FC = () => {
    return (
        <div className='w-full bg-primary-50 rounded-t-4xl py-24'>

            <div className='grid grid-cols-5 items-center mx-auto max-w-full mb-20'>
                <div className='text-6xl font-medium col-span-3'>Your key to strategic<br /> success through analytics</div>
                <div className='text-xl text-center col-span-2'>Ready for excting, instantaneous,<br /> all-accessible insights in real time?</div>
            </div>

            <div className='w-full max-w-full mx-auto grid grid-cols-5'>
                <div className='col-span-3 flex flex-col gap-4'>
                    <Card className='rounded-3xl p-0 pt-12 pl-12'>
                        <div className='flex gap-4'>
                            <div className='flex flex-col gap-14 justify-between '>
                                <Button variant='tertiary' className='w-fit h-fit px-4 py-2 shadow-tertiary shadow rounded-lg'>Setting up reports</Button>
                                <div className='flex flex-col gap-2'>
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
                <div className='col-span-2'>
                    <Card variant='primary' className='flex flex-col gap-4 rounded-3xl p-10'>
                        <div className='flex gap-2 justify-center'>
                            <TransactionsWidget />
                            <TransactionsWidget />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};