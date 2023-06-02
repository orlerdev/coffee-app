"use client";

import { useState } from "react";
import { useSignup } from "@/hooks/useSignup";
import Link from "next/link";
import s from "./signup.module.scss";
import styled from "styled-components";

export default function Signup() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [initialPassword, setInitialPassword] = useState("");
	const [password, setPassword] = useState("");
	const { error, isPending, signup } = useSignup();

	const handleSubmit = e => {
		e.preventDefault();
		const displayName = username;
		signup(email, password, displayName);
	};

	const passwordConfirm = (e, initialPassword, password) => {
		e.preventDefault();
		if (initialPassword !== password) {
			throw new Error("Passwords do not match");
			setInitialPassword("");
			setPassword("");
		} else {
			setPassword(e.target.value);
		}
	};

	const Overlay = styled.div`
		position: absolute;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		background: rgba(0, 0, 0, 0.8);
		z-index: 2;
	`;

	const Form = styled.form`
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 3;
		max-width: 360px;
		margin: 60px auto;
		padding: 20px;
	`;

	const Label = styled.label`
		display: block;
		margin: 30px auto;
	`;

	const Span = styled.span`
		display: block;
		margin-bottom: 6px;
	`;

	const Input = styled.input`
		padding: 8px 6px;
		font-size: 1em;
		color: #777;
		width: 100%;

		&:focus {
			box-shadow: inset rgba(18, 169, 199, 0.8);
		}
	`;

	const Btn = styled.button`
	background: none;
	border: 2px solid #1f9751;
	padding: 6px 12px;
	border-radius: 10px;
	color: #1f9751;
	font-weight: bold;
	cursor: pointer;
	font-size: 1em;
	transition: all ease-in-out .3s
	
	&:hover {
		background: #1f9751;
		color: #fff;
	}
	`;

	const Redirect = styled.p``;

	const Error = styled.p``;

	return (
		<>
			<Overlay id="signup-overlay" className="hidden"></Overlay>
			<Form onSubmit={handleSubmit} id="signup-form" className="hidden">
				<h2>Sign Up for Your Account!</h2>
				<Label>
					<Span>Username:</Span>
					<Input
						type="text"
						onChange={e => setUsername(e.target.value)}
						value={username}
						autofocus
					/>
				</Label>
				<Label>
					<Span>Email:</Span>
					<Input
						type="email"
						onChange={e => setEmail(e.target.value)}
						value={email}
					/>
				</Label>
				<Label>
					<Span>Password:</Span>
					<Input
						type="password"
						onChange={e => setInitialPassword(e.target.value)}
						value={initialPassword}
					/>
				</Label>
				<Label>
					<Span>Confirm Password:</Span>
					<Input
						type="password"
						onChange={passwordConfirm(e, initialPassword, password)}
						value={password}
					/>
				</Label>
				{!isPending && <Btn>Sign Up!</Btn>}
				{isPending && <Btn disabled>Loading...</Btn>}

				<Redirect>
					Already have an account? <Link href="@/login">Login Here</Link>
				</Redirect>

				{error && <Error>{error}</Error>}
			</Form>{" "}
			&&
		</>
	);
}
