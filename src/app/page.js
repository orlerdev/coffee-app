"use client"
import { useState } from "react"
import styled from "styled-components"
import Navbar from "@/components/Navbar"
import CoffeeContainer from "@/components/CoffeeContainer"
import CoffeeForm from "@/components/CoffeeForm"
import LoginForm from "@/components/LoginForm"
import { useCollection } from "@/hooks/useCollection"

const PageWrap = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	overflow: hidden;
`
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1 0 0;
	row-gap: 20px;
`
const Row = styled.div`
	display: flex;
	flex: 1 0 0;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 1100px;
	padding: 0 20px;
	gap: 20px;
`
const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
`
const Main = styled.main``

export default function Home() {
	const { documents: coffees } = useCollection("coffees")
	const [loginModalOpen, setLoginModalOpen] = useState(false)
	const handleLoginModalToggle = () => {
		setLoginModalOpen(!loginModalOpen)
	}
	return (
		<>
			<Navbar openLoginModal={handleLoginModalToggle} />
			<PageWrap>
				<Container>
					<Row>
						<Column>
							<LoginForm
								loginModalOpen={loginModalOpen}
								handleLoginModal={handleLoginModalToggle}
							/>
							{coffees && <CoffeeContainer coffees={coffees} />}
						</Column>
					</Row>
				</Container>
			</PageWrap>
		</>
	)
}
