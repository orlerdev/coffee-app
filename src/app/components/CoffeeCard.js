import styled from "styled-components";

const Card = styled.div``;
const FaveIcon = styled.div``;
const CardWrap = styled.div``;

export default function CoffeeCard({ coffees }) {
	return (
		<>
			<Card>
				<FaveIcon></FaveIcon>
				<CardWrap>data.brand</CardWrap>
				<CardWrap>data.name</CardWrap>
				<CardWrap>data.roast</CardWrap>
				<CardWrap>data.type</CardWrap>
			</Card>
		</>
	);
}
