"use client"
import { useState } from "react"
import heartEmpty from "@/image/heart-light.svg"
import heartFull from "@/image/heart-sharp-solid.svg"
import heartBreak from "@/image/heart-crack-solid.svg"
import Image from "next/image"

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
const IconWrap = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	height: 30px;
	width: 30px;
	padding: 1px;
`
const Icon = styled(Image)`
	height: 100%;
	width: 100%;
	object-size: cover;
	object-position: center;
	color: #000;

	&:hover {
		cursor: pointer;
	}
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
	const [unFavorite, setUnfavorite] = useState(null)
	const [full, setFull] = useState(null)
	const [empty, setEmpty] = useState(null)

	const mouseEnter = () => {
		setFull(!full)
		setEmpty(!empty)
	}

	const mouseLeave = () => {
		setFull(!full)
		setEmpty(!empty)
	}

	return (
		<Coffees>
			{coffees.map(coffee => (
				<Card key={coffee.id}>
					<IconWrap>
						<Icon
							src={heartEmpty}
							alt="favorite icon"
							style={{ color: "#18a2d9" }}
						/>
					</IconWrap>
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
