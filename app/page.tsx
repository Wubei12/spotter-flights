import DateRangePicker from '@/components/Home/DateRangePicker';
import HeroSection from '@/components/Home/HeroSection';
import LocationSelector from '@/components/Home/LocationSelector';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import TripTypeSelect from '../components/Select/TripTypeSelect';
import PassengerAmountSelect from '../components/Select/PassengerAmountSelect';
import FlightTypeSelect from '../components/Select/FlightTypeSelect';
import { SearchOutlined } from '@mui/icons-material';
import { map } from './public';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='h-[3000px] bg-[#202124]'>
			<main className='flex spotter_pagepad flex-col space-y-2 items-center sm:items-start'>
				<HeroSection />
				<Box className='bg-[#36373a] relative space-y-4 px-4 py-10 rounded-b-lg w-full'>
					<Box className='flex flex-wrap max-w-full items-center justify-start gap-4'>
						<TripTypeSelect />
						<PassengerAmountSelect />
						<FlightTypeSelect />
					</Box>
					<Box className='flex gap-4 flex-wrap w-full items-center justify-start'>
						<LocationSelector />
						<DateRangePicker />
					</Box>

					<Button
						variant='contained'
						className='rounded-full self-center bg-blue-300 text-black absolute -bottom-[10px] right-[50%] flex items-center justify-center gap-3'
					>
						<SearchOutlined className='text-2xl' />
						<span className='capitalize'>Explore</span>
					</Button>
				</Box>
				<Box className='flex flex-col space-y-2 pt-6 justify-center w-full'>
					<Typography
						color='primary'
						className='font-bold text-xl'
					>
						Find cheap flights from Addis Ababa to anywhere
					</Typography>
					<div className='relative w-full'>
						<Image
							src={map}
							alt='Spotter map'
							className='object-cover w-full h-[300px]'
						/>

						<Link
							href='https://www.google.com/travel/explore'
							className='absolute z-30 w-full h-full top-0 left-0 flex items-center justify-center bg-black/60 hover:bg-black/80 smooth cursor-pointer'
						>
							<Button
								variant='contained'
								className='rounded-full bg-[#202124] text-blue-300 flex items-center justify-center gap-3'
							>
								<span className='capitalize'>Explore destinations</span>
							</Button>
						</Link>
					</div>
				</Box>
			</main>
		</div>
	);
}
