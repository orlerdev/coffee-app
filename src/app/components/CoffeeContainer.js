"use client";
import styled from "styled-components";
import CoffeeForm from "@/components/CoffeeForm";

const Coffees = styled.div``;
const Card = styled.div``;
const FaveIcon = styled.div``;
const CardWrap = styled.div``;

export default function CoffeeContainer({ coffees }) {
	return (
		<>
			<CoffeeForm />
			<Coffees>
				{coffees.map(coffee => {
					<Card key={coffee.id}>
						<FaveIcon></FaveIcon>
						<CardWrap>coffee.brand</CardWrap>
						<CardWrap>coffee.name</CardWrap>
						<CardWrap>coffee.roast</CardWrap>
						<CardWrap>coffee.type</CardWrap>
					</Card>;
				})}
			</Coffees>
		</>
	);
}
