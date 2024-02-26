import React from 'react'
import { MdQrCode2 } from 'react-icons/md';

const Footer: React.FC = () => {
	return (
		<div className='flex flex-col gap-16 px-20 py-32 pb-20 bg-primary text-primary-50'>
			<div className='flex items-center justify-between'>
				<div className='flex gap-10'>
					<span className='text-xl transition-all duration-300 cursor-pointer text-primary-300 hover:text-primary-50'>About</span>
					<span className='text-xl transition-all duration-300 cursor-pointer text-primary-300 hover:text-primary-50'>Why Us</span>
					<span className='text-xl transition-all duration-300 cursor-pointer text-primary-300 hover:text-primary-50'>Platform</span>
					<span className='text-xl transition-all duration-300 cursor-pointer text-primary-300 hover:text-primary-50'>Pricing</span>
					<span className='text-xl transition-all duration-300 cursor-pointer text-primary-300 hover:text-primary-50'>Contact</span>
				</div>
				<span className='text-6xl'>hello@ramos.com</span>
			</div>
			<hr className='border-primary-300' />
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
				<div className='flex flex-col gap-4 text-2xl'>
					<span className='cursor-pointer'>Linkedin</span>
					<span className='cursor-pointer'>Instagram</span>
					<span className='cursor-pointer'>Facebook</span>
				</div>
			</div>
			<div className='flex items-center justify-between'>
				<span className='relative font-semibold text-9xl'>Ramos<span className='absolute text-5xl font-bold'>&#174;</span></span>
				<span className='transition duration-300 cursor-pointer text-primary-400 hover:text-primary-50'>Privacy Policy</span>
				<span className='transition duration-300 cursor-pointer text-primary-400 hover:text-primary-50'>License agreement</span>
				<div className='p-3 rounded-4xl bg-primary-50 text-primary'><MdQrCode2 className='w-40 h-40' /></div>
			</div>
		</div>
	);
};

export default Footer;
