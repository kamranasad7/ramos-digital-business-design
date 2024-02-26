import React from 'react'
import { MdQrCode2 } from 'react-icons/md';
import { Slide, Reveal } from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import { TextSliderUpper } from '../../TextSlider';

const Footer: React.FC = () => {

	const zoomAnimation = keyframes`
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
		<div className='flex flex-col gap-16 px-20 py-32 pb-10 bg-primary text-primary-50'>
			<div className='flex items-center justify-between'>

				<Slide direction='up'>
					<div className='flex gap-10'>
						<a className='text-xl transition-all duration-300 cursor-pointer text-primary-400 hover:text-primary-50'>About</a>
						<a href='#' className='text-xl transition-all duration-300 cursor-pointer text-primary-400 hover:text-primary-50'>Why Us</a>
						<a href='#' className='text-xl transition-all duration-300 cursor-pointer text-primary-400 hover:text-primary-50'>Platform</a>
						<a href='#' className='text-xl transition-all duration-300 cursor-pointer text-primary-400 hover:text-primary-50'>Pricing</a>
						<a href='#' className='text-xl transition-all duration-300 cursor-pointer text-primary-400 hover:text-primary-50'>Contact</a>
					</div>
				</Slide>
				<Slide direction='up'>
					<span className='text-7xl'>hello@ramos.com</span>
				</Slide>
			</div>
			<hr className='border-primary-400' />
			<div className='flex justify-between'>
				<Slide direction='up'>
					<div className='flex gap-32'>
						<div className='flex flex-col gap-1'>
							<span className='text-lg font-semibold'>Warrensville Heights</span>
							<span className='text-lg font-semibold text-primary-400'>14418 Vineyard Drive, NC</span>
							<span className='text-lg font-semibold text-primary-400'>44128</span>
						</div>
						<div className='flex flex-col gap-1'>
							<span className='text-lg font-semibold'>Saint Louis</span>
							<span className='text-lg font-semibold text-primary-400'>1366 Penn Street</span>
							<span className='text-lg font-semibold text-primary-400'>63101</span>
						</div>
					</div>
					<div className='flex flex-col gap-8 text-2xl'>
						<a href='#' className='cursor-pointer'>Linkedin</a>
						<a href='#' className='cursor-pointer'>Instagram</a>
						<a href='#' className='cursor-pointer'>Facebook</a>
					</div>
				</Slide>
			</div>
			<div className='flex items-center justify-between'>

				<TextSliderUpper
					text='Ramos'
					className='flex relative font-semibold text-10xl leading-[10rem]'
				/>
				<Reveal keyframes={zoomAnimation} duration={1500}>
					<span className='ml-[-120px] mb-14 text-7xl align-super'>&#174;</span>
				</Reveal>


				<a href='#' className='transition duration-300 cursor-pointer text-primary-400 hover:text-primary-50'>Privacy Policy</a>
				<a href='#' className='transition duration-300 cursor-pointer text-primary-400 hover:text-primary-50'>License agreement</a>

				<Reveal keyframes={zoomAnimation} duration={1500}>
					<div className='p-3 rounded-4xl bg-primary-50 text-primary'><MdQrCode2 className='w-40 h-40' /></div>
				</Reveal>
			</div>
		</div>
	);
};

export default Footer;
