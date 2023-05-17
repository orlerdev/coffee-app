"use client";
import { useState } from "react";
import s from "./userLoginPage.module.scss";
import { useLogin } from "~/hooks/useLogin";

export default function UserLoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { error, login } = useLogin();

	const handleSubmit = e => {
		e.preventDefault();
		console.log(email, password);
		console.log("User logged in");
		login(email, password);
	};

	return (
		<form onSubmit={handleSubmit} className={s.form}>
			<h2>Login</h2>
			<label className={s.label}>
				<span className={s.span}>Email:</span>
				<input
					className={s.input}
					type='email'
					onChange={e => setEmail(e.target.value)}
					value={email}
				/>
			</label>
			<label className={s.label}>
				<span className={s.span}>Password:</span>
				<input
					className={s.input}
					type='password'
					onChange={e => setPassword(e.target.value)}
					value={password}
				/>
			</label>
			<button className={s.button}>Login</button>
		</form>
	);
}
