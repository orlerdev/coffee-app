import s from "./navbar.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	return (
		<nav className={s.navbar}>
			<ul className={s.navUL}>
				<li className={s.avatar}>
					<Image
						src='/user-pic.jpg'
						alt='user profile pic'
						height={100}
						width={100}
					/>
					<span>Coffee 4 Coding</span>
				</li>
				<li>
					<Link href='@/login'>Login</Link>
				</li>
				<li>
					<Link href='@/signup'>Signup</Link>
				</li>
			</ul>
		</nav>
	);
}
