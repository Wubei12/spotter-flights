'use client';

import React, { useEffect, useState } from 'react';
import { Button, FormControl, MenuItem, Select } from '@mui/material';
import { AddOutlined, RemoveOutlined } from '@mui/icons-material';

interface PassengerType {
	type: string;
	count: number;
	min: number;
	max: number;
}

function PassengerAmountSelect() {
	const [isOpen, setIsOpen] = useState(false);
	const [passengers, setPassengers] = useState<PassengerType[]>([
		{ type: 'Adults', count: 1, min: 1, max: 9 },
		{ type: 'Children', count: 0, min: 0, max: 9 },
		{ type: 'Infants (in seat)', count: 0, min: 0, max: 9 },
		{ type: 'Infants (on lap)', count: 0, min: 0, max: 9 },
	]);

	const totalPassengers = passengers.reduce(
		(sum, passenger) => sum + passenger.count,
		0
	);

	const updatePassengerCount = (index: number, increment: number) => {
		setPassengers((prevPassengers) =>
			prevPassengers.map((passenger, i) =>
				i === index
					? {
							...passenger,
							count: Math.max(
								passenger.min,
								Math.min(passenger.max, passenger.count + increment)
							),
					  }
					: passenger
			)
		);
	};

	useEffect(() => {
		const handleClickOutside = (ev: MouseEvent) => {
			if (isOpen && !(ev.target as Element).closest('.passenger-select')) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [isOpen]);

	return (
		<div>
			<FormControl
				variant='standard'
				size='small'
				sx={{ m: 1, minWidth: 120 }}
			>
				<Select
					labelId='demo-simple-select-standard-label'
					id='demo-simple-select-standard'
					value={totalPassengers.toString()}
					label='passengers'
				>
					<MenuItem value=''></MenuItem>
					<div className='p-4 space-y-4 passenger-select'>
						{passengers.map((passenger, index) => (
							<MenuItem
								key={passenger.type}
								className='flex items-center justify-between'
							>
								<span className='text-sm font-medium'>{passenger.type}</span>
								<div className='flex items-center space-x-2'>
									<Button
										variant='outlined'
										onClick={() => updatePassengerCount(index, -1)}
										disabled={passenger.count <= passenger.min}
										aria-label={`Decrease ${passenger.type}`}
									>
										<RemoveOutlined className='h-4 w-4' />
									</Button>
									<span className='w-8 text-center tabular-nums'>
										{passenger.count}
									</span>
									<Button
										variant='outlined'
										onClick={() => updatePassengerCount(index, 1)}
										disabled={passenger.count >= passenger.max}
										aria-label={`Increase ${passenger.type}`}
									>
										<AddOutlined className='h-4 w-4' />
									</Button>
								</div>
							</MenuItem>
						))}
					</div>
				</Select>
			</FormControl>
		</div>
	);
}

export default PassengerAmountSelect;
