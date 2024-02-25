import { BsStack } from "react-icons/bs";
import Button from "../../UI/Button";
import { Card } from "../../UI/Card";
import IconButton from "../../UI/IconButton";

export const Analytics: React.FC = () => {
  return (
    <div className="w-full bg-primary-50 rounded-t-4xl p-6">
        <div className="w-full max-w-full mx-auto grid grid-cols-5">
            <div className="col-span-3 flex flex-col gap-4">
                <span className="text-6xl font-medium">Your key to strategic success through analytics</span>
                <Card className="rounded-4xl p-10">
                    <div className="grid grid-cols-2">
                      <div className="flex flex-col justify-between">
                        <Button variant="tertiary" className="w-fit h-fit px-4 py-2 shadow-tertiary shadow rounded-lg">Setting up reports</Button>
                        <div className="flex flex-col gap-2">
                          <span className="font-medium text-2xl">Fast and easy access to analytics</span>
                          <span className="text-primary-500">One platform is a comprehensive system of solutions that will be the first step towards digitalization of your business!</span>
                        </div>
                      </div>
                      <Card className="rounded-2xl p-3 py-2">
                        <div className="flex flex-col gap-4">
                          <span className="text-xl font-semibold">Sales statistic</span>
                          <div className="flex gap-2">
                            <IconButton variant="secondary" className="w-fit h-fit">
                              <BsStack className="text-white" />
                            </IconButton>
                            <div className="flex flex-col gap-1 text-xl font-semibold">
                              <span className="text-primary-500">Total profit</span>
                              <span>$ <span className="text-4xl">264,2K</span></span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                </Card>
            </div>
            <div className="col-span-2">

            </div>
        </div>
    </div>
  );
};