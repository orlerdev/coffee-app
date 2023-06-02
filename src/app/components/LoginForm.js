import { useState } from "react";
import styled from "styled-components";

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

const Title = styled.h2``;

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

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
	};

	return (
		<>
			<Overlay></Overlay>
			<Form onSubmit={handleSubmit}>
				<Title>Login</Title>
				<Label>
					<Span>Email:</Span>
					<Input
						required
						type="email"
						onChange={e => setEmail(e.target.value)}
						value={email}
					/>
				</Label>
				<Label>
					<Span>Password:</Span>
					<Input
						required
						type="password"
						onChange={e => setPassword(e.target.value)}
						value={password}
					/>
				</Label>
				<Btn>Login</Btn>
			</Form>
		</>
	);
}
