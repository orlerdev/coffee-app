"use client";
import { useState } from "react";
import { useSignup } from "@/hooks/useSignup";
import s from "./userSignupPage.module.scss";

export default function UserLoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const { error, isPending, signup } = useSignup();

	const handleSubmit = e => {
		e.preventDefault();
		const displayName = username;
		signup(email, password, displayName);
	};

	return (
		<form onSubmit={handleSubmit} className={s.form}>
			<h2>Sign Up For Your Account!</h2>
			<label className={s.label}>
				<span className={s.span}>Email:</span>
				<input
					className={s.input}
					type="email"
					onChange={e => setEmail(e.target.value)}
					value={email}
				/>
			</label>
			<label className={s.label}>
				<span className={s.span}>Password:</span>
				<input
					className={s.input}
					type="password"
					onChange={e => setPassword(e.target.value)}
					value={password}
				/>
			</label>
			<label className={s.label}>
				<span className={s.span}>Username:</span>
				<input
					className={s.input}
					type="text"
					onChange={e => setUsername(e.target.value)}
					value={username}
				/>
			</label>
			{!isPending && <button className={s.button}>Login</button>}
			{isPending && (
				<button className={s.button} disabled>
					Loading...
				</button>
			)}
			{error && <p>{error}</p>}
		</form>
	);
}
