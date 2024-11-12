import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import StoreProvider from './store-provider';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Spotter Flights | Home',
	description: 'Fly Anywhere. Anytime.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<StoreProvider>
					<Navbar />
					{children}
				</StoreProvider>
			</body>
		</html>
	);
}
