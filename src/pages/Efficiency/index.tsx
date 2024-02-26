import { TbActivityHeartbeat } from "react-icons/tb";
import IconButton from "../../components/UI/IconButton";
import Button from "../../components/UI/Button";
import HorizontalNewsTicker from "../../components/NewsTicker";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const Efficiency: React.FC = () => {

	const buttonsAnimation = keyframes`
    from {
      opacity: 0;
      transform: translate3d(0, 100px, 0) scale(0.5, 0.5);
    }
  
    to {
      opacity: 1;
      transform: translate3d(0, 0, 1) scale(1, 1);
    }
  `;
	return (
		<div className="flex flex-col w-full max-w-full gap-4 mx-auto">
			<div>
				<Fade direction="up" >
					<span className="font-semibold text-9xl">Maximize <span className="text-primary-300">efficiency</span></span>
				</Fade>
				<br />
				<Fade direction="up">
				<span className="font-semibold text-9xl">with our intuitive</span>
				</Fade>
			</div>
			<div className="flex justify-between w-full">
				<div className="flex items-center">
					<Reveal keyframes={buttonsAnimation} duration={1500}>
						<IconButton variant="light" className="z-10 flex items-center justify-center px-4 rounded-full py-14 h-fit p">
							<hr className="w-10 border-dotted bg-secondary" />
							<div className='p-4 rounded-xl bg-secondary'>
								<TbActivityHeartbeat className="text-3xl text-white" />
							</div>
							<hr className="w-10 border-dotted bg-secondary" />
						</IconButton>
						<IconButton variant="tertiary" className="flex flex-col items-center justify-center gap-2 px-[2.7rem] h-fit py-10 -ml-6 rounded-full">

							<span className="text-4xl font-semibold">45%</span>
							<span className="text-sm font-normal">System grow <br /> faster</span>
						</IconButton>
					</Reveal>
				</div>
				<Reveal keyframes={buttonsAnimation} duration={1500}>
					<span className="rounded-4xl whitespace-nowrap bg-tertiary text-9xl w-[28rem] overflow-hidden flex items-center h-fit py-4 pb-8 px-2"><HorizontalNewsTicker /></span>
				</Reveal>
			</div>
			<hr className="w-full my-16"></hr>
			<div className="flex justify-between">

				<Fade direction="up" duration={1500}>
					<p className="font-semibold">Explore traffic sources, page behavior, conversations and more to gain deep insight <br /> into your audience. With us, your business doesn't just adapt - it evolves</p>
				</Fade>

				<Reveal keyframes={buttonsAnimation} duration={1500}>
					<div className="flex gap-4">
						<Button variant="light" className="px-8 !text-primary rounded-xl">Request a demo</Button>
						<Button variant="secondary" className="px-12 rounded-xl">Start for free</Button>
					</div>
				</Reveal>
			</div>
		</div>
	)
}

export default Efficiency;