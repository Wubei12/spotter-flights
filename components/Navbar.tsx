'use client';

import { logo } from '@/app/public';
import { NavOptions, NavOptions2, NavOptions3 } from '@/utils/data';
import { Flight, Inbox, Mail, Menu } from '@mui/icons-material';
import {
	Box,
	Button,
	Divider,
	Drawer,
	Icon,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Tooltip,
	Typography,
} from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

const drawerWidth = 275;

function Navbar() {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	const DrawerList = (
		<Box
			sx={{ width: 275 }}
			className='flex flex-col justify-between h-screen'
			role='presentation'
			onClick={toggleDrawer(false)}
		>
			<Box>
				<List>
					{NavOptions.map((option, index) => (
						<ListItem
							key={index}
							disablePadding
							className='hover:bg-white/20 hover:text-white
						 smooth py-2 rounded-r-full'
						>
							<ListItemButton className='flex items-center justify-start px-8 gap-8'>
								<option.icon className='size-5' />
								<Typography className='text-sm font-semibold'>
									{option.service}
								</Typography>
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider className='bg-[#d9dadc]' />
				<List>
					{NavOptions2.map((option, index) => (
						<ListItem
							key={index}
							disablePadding
							className='hover:bg-white/20 hover:text-white
						 smooth py-2 rounded-r-full'
						>
							<ListItemButton className='flex items-center justify-start px-8 gap-8'>
								<option.icon className='size-5' />
								<Typography className='text-sm font-semibold'>
									{option.service}
								</Typography>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Box>

			<Box>
				<Divider className='bg-[#d9dadc]' />
				<List>
					{NavOptions3.map((option, index) => (
						<ListItem
							key={index}
							disablePadding
							className='hover:bg-white/20 hover:text-white
						 smooth py-2 rounded-r-full'
						>
							<ListItemButton className='flex items-center justify-start px-8 gap-8'>
								<option.icon className='size-5' />
								<Typography className='text-sm font-semibold'>
									{option.service}
								</Typography>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Box>
		</Box>
	);

	return (
		<div className='fixed top-0 border-b border-gray-500 w-full z-[9999] bg-[#1F1F1F] lg:px-12 px-6 text-white flex items-center justify-between py-3'>
			<div className='flex items-center justify-center gap-3 md:gap-12'>
				<div className='flex items-center justify-center gap-3'>
					<Tooltip title='Main menu'>
						<Button
							className='rounded-full text-sm text-white font-bold capitalize hover:border-gray-500 border-gray-600 transition duration-300 ease-in-out flex gap-2 px-3 py-2'
							onClick={toggleDrawer(true)}
						>
							<Menu />
						</Button>
					</Tooltip>
					<Drawer
						open={open}
						onClose={toggleDrawer(false)}
						sx={{
							width: drawerWidth,
							flexShrink: 0,
							[`& .MuiDrawer-paper`]: {
								width: drawerWidth,
								boxSizing: 'border-box',
								backgroundColor: '#1f1f1f',
								paddingTop: 12,
								color: '#E8EAED',
								fontSize: 14,
							},
						}}
					>
						{DrawerList}
					</Drawer>
					<Image
						src={logo}
						width={50}
						height={20}
						alt='spotter-flights-logo'
					/>
					<h1 className='text-lg text-wrap font-bold text-gray-500'>
						Spotter Flights
					</h1>
				</div>
				<div className='llg:flex hidden  items-center justify-center gap-6'>
					{NavOptions.map((option, i) => {
						return (
							<Button
								variant='outlined'
								className='rounded-full text-sm text-[#E8EAED] font-bold hover:text-blue-300 capitalize hover:border-gray-500 border-gray-600 items-center justify-center transition duration-300 ease-in-out flex gap-2 px-3 py-2'
								size='small'
								key={i}
							>
								<option.icon className='size-4 text-blue-300' />
								<p className='text-nowrap'>{option.service}</p>
							</Button>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Navbar;
