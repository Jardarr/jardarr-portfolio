import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Provider } from "./components/Provider";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "My Portfolio",
	description: "Built using nextjs and tailwind",
};

const pixeloid = localFont({
	src: "../public/PixeloidSans.woff",
	variable: "--pixeloid-sans",
	weight: "100 900",
});
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.className} ${pixeloid.variable} bg-white text-black dark:bg-[#090908] dark:text-white h-full selection:bg-gray-50 dark:selection:bg-gray-800 pixeloid`}>
				<Provider>
					<Navbar />
					<main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
						{children}
					</main>
				</Provider>
			</body>
		</html>
	);
}