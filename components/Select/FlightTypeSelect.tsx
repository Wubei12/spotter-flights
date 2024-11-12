'use client';

import { CheckOutlined } from '@mui/icons-material';
import {
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import React from 'react';

const flightTypes = [
	{ name: 'Economy', value: 'economy' },
	{ name: 'Premium Economy', value: 'premiumeconomy' },
	{ name: 'Business', value: 'business' },
	{ name: 'First', value: 'first' },
];

function FlightTypeSelect() {
	const [type, setType] = React.useState('economy');
	console.log('🚀 ~ FlightTypeSelect ~ type:', type);

	const handleChange = (event: SelectChangeEvent) => {
		setType(event.target.value);
	};

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
					value={type}
					onChange={handleChange}
					label='Type'
					renderValue={() => {
						// Find the selected option to display its name only, without the check icon
						const selectedOption = flightTypes.find(
							(option) => option.value === type
						);
						return selectedOption ? selectedOption.name : '';
					}}
				>
					{flightTypes.map((option, i) => {
						return (
							<MenuItem
								key={option.value}
								value={option.value}
								className='flex items-center justify-center md:w-[150px] lg:w-[200px] gap-3'
							>
								{type === option.value && <CheckOutlined />}
								{option.name}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</div>
	);
}

export default FlightTypeSelect;
