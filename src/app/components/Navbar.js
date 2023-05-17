"use client";

import s from "./navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useLogout } from "~/hooks/useLogout";

export default function Navbar() {
	const { logout } = useLogout();
	return (
		<nav className={s.navbar}>
			<div className={s.avatar}>
				<Link href="/dashboard">
					<Image
						src="/user-pic.jpg"
						alt="user profile pic"
						fill
						style={{ objectFit: "cover", objectPosition: "top" }}
					/>
				</Link>
			</div>
			<div className={s.coName}>Coffee 4 Coding</div>
			<ul className={s.navUL}>
				<li>
					<Link href="/login">Login</Link>
				</li>
				<li>
					<Link href="/signup">Signup</Link>
				</li>
				<button className={s.btn} onClick={logout}>
					Logout
				</button>
			</ul>
		</nav>
	);
}
