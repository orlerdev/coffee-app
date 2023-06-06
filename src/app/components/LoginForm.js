import { useCallback, useState } from "react"
import Image from "next/image"
import styled from "styled-components"
import peaceOut from "@/image/hand-peace-light.svg"

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background: rgba(0, 0, 0, 0.8);
	z-index: 1;
`

const Form = styled.form`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
	height: 40vh;
	width: 40vw;
	min-width: 360px;
	margin: 60px auto;
	row-gap: 20px;
	background: var(--secondary);
	padding: 20px;
	display: flex;
	flex-direction: column;
`

const Title = styled.h2``

const Label = styled.label`
	display: block;
`

const Span = styled.span`
	display: block;
	margin-bottom: 6px;
`

const Input = styled.input`
	padding: 8px 6px;
	font-size: 1em;
	color: #777;
	width: 100%;
	background: var(--secondary);
	outline: 0;
	border: 0;
	box-shadow: inset 0 0 4px var(--primary);
	transition: all ease-in 0.3s;

	&:focus {
		background: var(--cta-lite);
	}
`
const ButtonGroup = styled.div`
	display: flex;
	justify-content: space-between;
	column-gap: 5px;
	margin-top: 20px;
`

const LogBtn = styled.button`
	border: 1px solid transparent;
	padding: 8px 6px;
	border-radius: 1px;
	color: var(--secondary);
	font-weight: bold;
	cursor: pointer;
	font-size: 1em;
	width: 100%;
	color: var(--secondary);
	background: var(--cta);
	transition: all ease-in-out 0.3s;

	&:hover {
		background: none;
		color: var(--cta);
		border: 1px solid var(--cta);
	}
`
const CancelBtn = styled(LogBtn)`
	position: absolute;
	top: 10px;
	right: 10px;
	border: 3px solid var(--cta);
	background: none;
	color: var(--cta);
	height: 30px;
	width: 30px;
	padding: 1px;

	&:hover {
		background: var(--cta-lite);
		color: var(--secondary);
	}
`

const Icon = styled(Image)`
	height: 100%;
	width: 100%;
	object-size: cover;
	object-position: center;
`

export default function Login({ loginModalOpen, handleLoginModal }) {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = e => {
		e.preventDefault()
	}

	return (
		<>
			{loginModalOpen && (
				<div>
					<Overlay onClick={handleLoginModal}></Overlay>
					<Form onSubmit={handleSubmit}>
						<Title>Login</Title>
						<Label>
							<Span>Email:</Span>
							<Input
								data-autofocus
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
						<ButtonGroup>
							<LogBtn type="submit">Login</LogBtn>
							<CancelBtn onClick={handleLoginModal}>
								<Icon src={peaceOut} alt="close modal icon" />
							</CancelBtn>
						</ButtonGroup>
					</Form>
				</div>
			)}
		</>
	)
}
