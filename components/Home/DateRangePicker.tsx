'use client';

import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DateRange } from '@mui/x-date-pickers-pro/models';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro';
import { Divider, Typography } from '@mui/material';

function DepartureReturnDatePicker() {
	const [value, setValue] = React.useState<DateRange<Dayjs>>([
		dayjs('2022-04-17'),
		dayjs('2022-04-21'),
	]);

	return (
		<div className=' max-w-full'>
			<DateRangePicker
				localeText={{ start: 'Departure', end: 'Return' }}
				value={value}
				onChange={(newValue: DateRange<Dayjs>) => setValue(newValue)}
				sx={{
					borderColor: '#fff',
				}}
				className='lg:w-[300px] w-[400px] xl:w-[450px]'
			/>
		</div>
	);
}

export default DepartureReturnDatePicker;
