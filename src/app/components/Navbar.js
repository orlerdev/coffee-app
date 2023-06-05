"use client"
import { useState, useCallback } from "react"
import { useLogout } from "@/hooks/useLogout"
import Link from "next/link"
import Image from "next/image"
import s from "./navbar.module.scss"

export default function Navbar({ openLoginModal }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const openLoginModalHandler = useCallback(() => {
		openLoginModal()
	}, [openLoginModal])
	return (
		<nav className={s.navbar}>
			{/* if logged in redirect to profile */}
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
			<div className={s.coName}>
				<Link href={"/"}>Coffee 4 Coding</Link>
			</div>

			<ul className={s.navUL}>
				<li>
					{/* <Link href="/login">Login</Link> */}
					<button onClick={openLoginModalHandler} className={s.btn}>
						Login
					</button>
				</li>
				{/* <Link href="/signup">Signup</Link> */}
				<button className={s.btn}>Signup</button>
				<button className={s.btn}>Logout</button>
			</ul>
		</nav>
	)
}
