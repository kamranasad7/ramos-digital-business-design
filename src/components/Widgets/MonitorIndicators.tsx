import { TbVectorTriangle } from "react-icons/tb";
import { Card } from "../UI/Card";
import { MdOutlineInsights } from "react-icons/md";
import Button from "../UI/Button";
import { Slide } from "react-awesome-reveal";

export const MonitorIndicators: React.FC = () => {
    return (
        <Card className="!bg-primary-50 relative pb-0 px-0">
            <div className="relative h-full flex flex-col justify-end items-center gap-6 bg-[length:120px_120px]">

                <Slide direction="up">
                    <div className="relative">
                        <Card variant='light' className="absolute top-10 w-[55%] z-0 h-60" />
                    </div>
                </Slide>
                <Card variant='light' className="absolute top-16 w-[70%] z-10 h-60 py-3 px-3">
                    <div className="relative flex items-center gap-3">
                        <div className="bg-primary-50 rounded-lg flex items-center justify-center p-2"><TbVectorTriangle /></div>
                        <span className="text-sm font-semibold">Finance reports</span>
                    </div>
                </Card>
                <Card variant='light' className="absolute top-28 w-[80%] z-20 h-60 py-3 px-3 drop-shadow-lg">
                    <div className="flex h-full relative justify-between">
                        <div className="flex flex-col justify-between h-full relative">
                            <div className="relative flex items-center gap-3">
                                <div className="bg-primary-50 rounded-lg flex items-center justify-center p-2"><MdOutlineInsights /></div>
                                <span className="text-sm font-semibold">Insights</span>
                            </div>
                            <div className="flex flex-col gap-2 whitespace-nowrap bottom-0 absolute">
                                <span className="text-primary-400 font-semibold">Total profit</span>
                                <span className="font-semibold text-xl">$ <span className="text-4xl">264,2K</span></span>
                                <Button variant='tertiary' className="rounded-xl py-3 shadow-tertiary shadow mt-4">Data Visualization</Button>
                            </div>
                        </div>
                        <img src="analytics.png" />
                    </div>
                </Card>
                <div className="flex flex-col gap-6 items-center bg-primary-50 rounded-b-2xl p-4 drop-shadow-2xl">
                    <span className="font-semibold text-2xl">Monitoring Key Indicators</span>
                    <p className="px-[7.8rem] text-center">Analytics platforms allow businesses to track KPIs, an important tool for measuring success and achieving goals</p>
                </div>
            </div>
        </Card>
    );
};