"use client";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import { useEffect, useState } from "react";
import CoffeeContainer from "@/components/CoffeeContainer";

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
const Error = styled.p``;
const Pending = styled.p``;
const Data = styled.div``;

export default function Home() {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(false);
	const [coffees, setCoffees] = useState(null);

	useEffect(() => {
		setIsPending(true);
		const ref = collection(db, "coffees");

		getDocs(ref).then(snapshot => {
			snapshot.docs.forEach(doc => {
				let results = [];
				results.push({ id: doc.id, ...doc.data() });
			});
			setCoffees(results);
		});
	}, []);

	return;
	<PageWrap>
		<Container>
			<Row>
				<Column>
					<Main>
						<CoffeeContainer />
					</Main>
				</Column>
			</Row>
		</Container>
	</PageWrap>;
}
