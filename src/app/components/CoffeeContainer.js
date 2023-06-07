"use client"
import CoffeeCard from "@/components/CoffeeCard"

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
const IconWrap = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	height: 30px;
	width: 30px;
	padding: 1px;
`

const Icon = styled(Image)``



export default function CoffeeContainer({ coffees }) {
	return (
		<Coffees>
			{coffees.map(coffee => (
				<CoffeeCard key={coffee.id} coffee={coffee} />
			))}
		</Coffees>
	)
}
