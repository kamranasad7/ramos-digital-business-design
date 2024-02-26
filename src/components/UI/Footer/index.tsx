import React from 'react'
import { MdQrCode2 } from 'react-icons/md';

const Footer: React.FC = () => {
	return (
		<div className='flex flex-col gap-16 px-20 py-32 pb-10 bg-primary text-primary-50'>
			<div className='flex items-center justify-between'>
				<div className='flex gap-10'>
					<a className='text-2xl transition-all duration-300 cursor-pointer text-primary-400 hover:text-primary-50'>About</a>
					<a href='#' className='text-2xl transition-all duration-300 cursor-pointer text-primary-400 hover:text-primary-50'>Why Us</a>
					<a href='#' className='text-2xl transition-all duration-300 cursor-pointer text-primary-400 hover:text-primary-50'>Platform</a>
					<a href='#' className='text-2xl transition-all duration-300 cursor-pointer text-primary-400 hover:text-primary-50'>Pricing</a>
					<a href='#' className='text-2xl transition-all duration-300 cursor-pointer text-primary-400 hover:text-primary-50'>Contacts</a>
				</div>
				<span className='text-7xl'>hello@ramos.com</span>
			</div>
			<hr className='border-primary-400' />
			<div className='flex justify-between'>
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
				<div className='flex flex-col gap-8 text-2xl '>
					<a href='#' className='cursor-pointer hover:text-secondary'>Linkedin</a>
					<a href='#' className='cursor-pointer hover:text-secondary'>Instagram</a>
					<a href='#' className='cursor-pointer hover:text-secondary'>Facebook</a>
				</div>
			</div>
			<div className='flex items-center justify-between'>
				<span className='relative font-semibold text-10xl leading-[10rem]'>Ramos<span className='text-7xl align-super'>&#174;</span></span>
				<a href='#' className='transition duration-300 cursor-pointer text-primary-400 hover:text-primary-50 text-xl'>Privacy Policy</a>
				<a href='#' className='transition duration-300 cursor-pointer text-primary-400 hover:text-primary-50 text-xl'>License agreement</a>
				<div className='p-3 rounded-3xl bg-primary-50 text-primary'><MdQrCode2 size={128} /></div>
			</div>
		</div>
	);
};

export default Footer;
