"use client";
import styled from "styled-components";
import CoffeeContainer from "@/components/CoffeeContainer";
import CoffeeForm from "@/components/CoffeeForm";
import LoginForm from "@/components/LoginForm";
import { useCollection } from "@/hooks/useCollection";

const PageWrap = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 20px;
`;
const Row = styled.div`
	width: 100%;
	max-width: 1100px;
	display: flex;
	padding: 0 20px;
	gap: 20px;
`;
const Column = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 0 0;
`;
const Main = styled.main``;

export default function Home() {
	const { documents: coffees } = useCollection("coffees");

	return;
	<PageWrap>
		<Container>
			<Row>
				<Column>
					<Main>
						<LoginForm />
						{coffees && <CoffeeContainer coffees={coffees} />}
						<CoffeeForm />
					</Main>
					;
				</Column>
			</Row>
		</Container>
	</PageWrap>;
}
