import { hero } from '@/app/public';
import Image from 'next/image';
import React from 'react';

function HeroSection() {
	return (
		<div className='w-full relative'>
			<Image
				src={hero}
				alt='spotter-flights-hero'
				className='w-full h-[30vh]'
			/>
			<div className='absolute flex px-6 flex-col top-32 space-y-4 left-12font-poppins'>
				<span className='text-6xl text-white font-bold'>Flights</span>

				<span className='text-3xl text-white'>Fly Anytime. Anywhere.</span>
			</div>
		</div>
	);
}

export default HeroSection;
