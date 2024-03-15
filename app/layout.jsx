import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["500" , "700"] });

export const metadata = {
	title: "Shortly URL shortening app",
	description: "A next app thaf generates a shortened link for a website",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
