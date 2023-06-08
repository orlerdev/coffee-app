"use client"
import { useState, useCallback } from "react"
import { useLogout } from "@/hooks/useLogout"
import styled from "styled-components"
import Link from "next/link"
import Image from "next/image"

const Nav = styled.nav`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	height: 80px;
	width: 100%;
	padding: 5px 4rem;
	background-color: rgba(203, 205, 213, 0.2);
	font-size: x-large;
	column-gap: 10px;
	color: #fff;
	font-weight: 300;
`

const Avatar = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	height: 100%;
	min-width: 80px;
	margin-top: 15px;
	margin-left: -10px;
	margin-right: 40px;
	border: 3px solid #fff;
	border-radius: 50%;
	overflow: hidden;
	background: url("/images/user-pic.jpg");
	background-size: cover;
	background-position: top;
	background-repeat: no-repeat;
`
const Logo = styled.div`
	display: flex;
	align-items: flex-end;
	width: 100%;
	font-size: 1.7em;
	font-weight: 300;
`
const NavUL = styled.ul`
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	height: 100%;
	width: 100%;
	column-gap: 20px;
	font-size: xx-large;
`
const ListItem = styled.li``
const Btn = styled.button`
	background: transparent;
	border: none;
	outline: none;
	padding: 0 8px;
	transition: all ease-in 0.3s;
	&:hover {
		background: rgb(249 250 251 / 55%);
		color: rgba(37, 37, 37, 0.9);
	}
`
const StyledLink = styled(Link)``
const StyledImage = styled(Image)``

export default function Navbar({ openLoginModal }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const openLoginModalHandler = useCallback(() => {
		openLoginModal()
	}, [openLoginModal])

	const { logout } = useLogout()

	return (
		<Nav>
			{/* if logged in redirect to profile */}
			<Avatar>
				<Link href="/dashboard">
					<Image
						src="/user-pic.jpg"
						alt="user profile pic"
						fill
						style={{ objectFit: "cover", objectPosition: "top" }}
					/>
				</Link>
			</Avatar>
			<Logo>
				<Link href={"/"}>Coffee 4 Coding</Link>
			</Logo>

			<NavUL>
				<ListItem>
					<Btn onClick={openLoginModalHandler}>Login</Btn>
				</ListItem>
				{/* <Link href="/signup">Signup</Link> */}
				<Btn>Signup</Btn>
				<Btn onClick={logout}>Logout</Btn>
			</NavUL>
		</Nav>
	)
}
