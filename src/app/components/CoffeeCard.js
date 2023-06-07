import { useState } from "react"
import Image from "next/image"
import heartEmpty from "@/image/heart-light.svg"
import heartFull from "@/image/heart-sharp-solid.svg"
import heartBreak from "@/image/heart-crack-solid.svg"
import styled from "styled-components"

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
const Icon = styled(Image)`
	height: 100%;
	width: 100%;
	object-size: cover;
	object-position: center;

	&:hover {
		cursor: pointer;
	}
`
const IconsWrap = styled.div``

const CardItem = styled.p`
	text-transform: capitalize;

	&:nth-of-type(1) {
		font-size: 1.5em;
	}
	&:nth-of-type(2) {
		font-size: 1.8em;
	}
`

export default function CoffeeCard({ coffee }) {
	const {
		brand: coffeeBrand,
		name: coffeeName,
		roast: coffeeRoast,
		type: coffeeType
	} = coffee
	const [isFavorite, setIsFavorite] = useState(false)

	const key = `${isFavorite ? "favorite" : "notFavorite"}`

	const icons = {
		favorite: <Icon src={heartFull} />,
		notFavorite: <Icon src={heartEmpty} />
	}

	const handleFavoriteClick = () => {
		setIsFavorite(!isFavorite)
	}

	const mouseEnter = () => {
		onmouseenter = () => {}
	}

	const mouseLeve = () => {
		onmouseleave = () => {}
	}

	return (
		<>
			<Card>
				<IconsWrap>{icons[key]}</IconsWrap>
				<CardItem>{coffeeBrand}</CardItem>
				<CardItem>{coffeeName}</CardItem>
				<CardItem>{coffeeRoast}</CardItem>
				<CardItem>{coffeeType}</CardItem>
			</Card>
		</>
	)
}
