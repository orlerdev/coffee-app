"use client";

import { useState } from "react";
import { useSignup } from "@/hooks/useSignup";
import Link from "next/link";
import s from "./signup.module.scss";
import styled from "styled-components";

export default function Signup() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [showForm, setShowForm] = useState(false);
	const { error, isPending, signup } = useSignup();

	const Toggle = () => setShowForm(!showForm);

	const handleSubmit = e => {
		e.preventDefault();
		const displayName = username;
		signup(email, password, displayName);
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

	return (
		<>
			<Overlay
				id="signup-overlay"
				className="hidden"
				onClick={() => Toggle}></Overlay>
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
						onChange={e => setPassword(e.target.value)}
						value={password}
					/>
				</Label>
				{!isPending && <Btn>Sign Up!</Btn>}
				{isPending && <Btn disabled>Loading...</Btn>}

				<p className={s.redirect}>
					Already have an account? <Link href="@/login">Login Here</Link>
				</p>

				{error && <p>{error}</p>}
			</Form>
		</>
	);
}
