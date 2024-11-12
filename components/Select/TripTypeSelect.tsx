'use client';

import { FlightOption } from '@/utils/data';
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import React from 'react';

function TripTypeSelect() {
	const [trip, setTrip] = React.useState('round');

	const handleChange = (event: SelectChangeEvent) => {
		setTrip(event.target.value);
	};
	return (
		<div>
			{' '}
			<FormControl
				variant='standard'
				size='small'
				sx={{ m: 1, minWidth: 120 }}
			>
				<Select
					labelId='demo-simple-select-standard-label'
					id='demo-simple-select-standard'
					value={trip}
					onChange={handleChange}
					label='Trip'
					size='small'
				>
					<MenuItem value=''>
						<em>None</em>
					</MenuItem>
					{[
						{ name: 'Round trip', value: 'round' },
						{ name: 'One way', value: 'oneway' },
						{ name: 'Multi-city', value: 'multi' },
					].map((option, i) => {
						return (
							<MenuItem
								key={i}
								value={option.value}
								className='text-xs'
							>
								{option.name}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</div>
	);
}

export default TripTypeSelect;
