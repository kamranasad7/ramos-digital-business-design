import { TbActivityHeartbeat } from "react-icons/tb";
import IconButton from "../../components/UI/IconButton";

const Efficiency: React.FC = () => {
  return (
		<div className="flex flex-col w-full max-w-full gap-4 mx-auto">
			<div>
				<span className="font-semibold text-9xl">Maximize <span className="text-primary-300">efficiency</span></span>
				<br />
				<span className="font-semibold text-9xl">with our intuitive</span>
			</div>
			<div className="flex justify-between w-full">
				<div className="flex items-center">
					<IconButton variant="light" className="z-10 flex items-center justify-center px-4 rounded-full py-14 h-fit p">
						<hr className="w-10 border-dotted bg-secondary"/>
						<div className='p-4 rounded-xl bg-secondary'>
							<TbActivityHeartbeat className="text-3xl text-white" />
						</div>
						<hr className="w-10 border-dotted bg-secondary"/>
					</IconButton>
					<IconButton variant="tertiary" className="flex flex-col items-center justify-center gap-2 px-[2.7rem] h-fit py-10 -ml-6 rounded-full">
						
						<span className="text-4xl font-semibold">45%</span>
						<span className="text-sm font-normal">System grow <br/> faster</span>
					</IconButton>
				</div>
				<span className="rounded-4xl whitespace-nowrap bg-tertiary text-9xl w-[28rem] overflow-hidden flex items-center h-fit py-4 pb-8 px-2">Analytics Service</span>
			</div>
		</div>
  )
}

export default Efficiency;