import { Inter } from "next/font/google"
import StyledComponentsRegistry from "@/lib/registry"
import "./styles/reset.css"
import "./styles/global.css"

const inter = Inter({ subsets: ["latin"] })
export const metadata = {
	title: "Coffee App",
	description: "Coffee 4 Coding"
}
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	)
}
