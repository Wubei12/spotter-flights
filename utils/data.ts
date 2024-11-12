import {
	EditLocationOutlined,
	FeedbackOutlined,
	Flight,
	HelpOutlineOutlined,
	Hotel,
	House,
	Language,
	Luggage,
	Money,
	Settings,
	SvgIconComponent,
	SwapHorizOutlined,
	Timeline,
	TravelExplore,
} from '@mui/icons-material';

interface NavOptionsTypes {
	icon: SvgIconComponent;
	service: string;
}

export const NavOptions: NavOptionsTypes[] = [
	{
		icon: Luggage,
		service: 'Travel',
	},
	{
		icon: TravelExplore,
		service: 'Explore',
	},
	{
		icon: Flight,
		service: 'Flights',
	},
	{
		icon: Hotel,
		service: 'Hotels',
	},
	{
		icon: House,
		service: 'Vacation rentals',
	},
];

export const NavOptions2: NavOptionsTypes[] = [
	{
		icon: Timeline,
		service: 'Tracked flight prices',
	},
	{
		icon: Language,
		service: 'Change language',
	},
	{
		icon: Money,
		service: 'Change currency',
	},
	{
		icon: EditLocationOutlined,
		service: 'Change location',
	},
];

export const NavOptions3: NavOptionsTypes[] = [
	{
		icon: Settings,
		service: 'Flight settings',
	},
	{
		icon: FeedbackOutlined,
		service: 'Feedback',
	},
	{
		icon: HelpOutlineOutlined,
		service: 'Help',
	},
];

interface FlightOpProps {}

export const FlightOption: FlightOpProps[] = [
	{
		icon: SwapHorizOutlined,
		option: ['Round trip', 'One way', 'Multi-city'],
	},
];
