"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
const Coffees = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	height: 80vh;
	width: 80vw;
	margin-top: 80px;
	padding: 20px;
	gap: 20px;
`
const Card = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	row-gap: 5px;
	height: 200px;
	width: 300px;
	padding: 20px;
	color: #000;
	box-shadow: inset 0 0 5px rgba(203, 205, 213, 0.2);
	background: linear-gradient(
			rgba(255, 255, 255, 0.8),
			rgba(255, 255, 255, 0.8)
		),
		url("/images/neon_coffee.jpg");
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
`
const FaveIcon = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	height: 20px;
	width: 20px;
	background: indianred;
`
const CardWrap = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`
const CardItem = styled.p`
	text-transform: capitalize;

	&:nth-of-type(1) {
		font-size: 1.5em;
	}
	&:nth-of-type(2) {
		font-size: 1.8em;
	}
`

const CardWrapItem = styled.p`
	text-transform: capitalize;
`

export default function CoffeeContainer({ coffees }) {
	return (
		<Coffees>
			{coffees.map(coffee => (
				<Card key={coffee.id}>
					<FaveIcon></FaveIcon>
					<CardItem>{coffee.brand}</CardItem>
					<CardItem>{coffee.name}</CardItem>
					<CardWrap>
						<CardWrapItem>{coffee.roast}</CardWrapItem>
						<CardWrapItem>{coffee.style}</CardWrapItem>
					</CardWrap>
				</Card>
			))}
		</Coffees>
	)
}
