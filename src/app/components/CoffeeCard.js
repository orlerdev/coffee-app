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
const FaveIcon = styled(Image)`
	height: 100%;
	width: 100%;
	object-size: cover;
	object-position: center;
	color: #000;

	&:hover {
		cursor: pointer;
	}
`
const TrashIcon = styled(Image)``

const CardItem = styled.p`
	text-transform: capitalize;

	&:nth-of-type(1) {
		font-size: 1.5em;
	}
	&:nth-of-type(2) {
		font-size: 1.8em;
	}
`

export default function CoffeeCard({ key, coffees }) {





	const { brand, name, roast, type } = coffees
	const [empty, setEmpty] = useState(null)
	const [full, setFull] = useState(null)
	const [heartbreak, setHeartbreak] = useState(null)
	const [source, setSource] = useState({ heartEmpty })
	let iconResult =	
{
  'case1': 'Result for case 1',
  'case2': 'Result for case 2',
  'case3': 'Result for case 3'
}['case2']


	if ()

	return (
		<>
			<Card key={key}>
				<FaveIcon>
					{empty && (
						<Image
							src={heartEmpty}
							alt="Empty favorite icon"
							style={{ color: "#18a2d9" }}
						/>
					)}
				</FaveIcon>
				<TrashIcon></TrashIcon>
				<CardItem>{brand}</CardItem>
				<CardItem>{name}</CardItem>
				<CardItem>{roast}</CardItem>
				<CardItem>{type}</CardItem>
			</Card>
		</>
	)
}

