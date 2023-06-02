"use client";
import { useState } from "react";

export default function CoffeeForm() {
	const [brand, setBrand] = useState("");
	const [name, setName] = useState("");
	const [roast, setRoast] = useState("");
	const [style, setStyle] = useState("");
	const [newCoffee, setNewCoffee] = useState("");

	const handleSubmit = async e => {
		e.preventDefault();
		setNewCoffee("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				<span>Brand:</span>
				<input
					required
					type="text"
					onChange={e => setBrand(e.target.value)}></input>
			</label>
			<label>
				<span>Name:</span>
				<input
					required
					type="text"
					onChange={e => setName(e.target.value)}></input>
			</label>
			<label>
				<span>Roast:</span>
				<input
					required
					type="text"
					onChange={e => setRoast(e.target.value)}></input>
			</label>
			<label>
				<span>Style:</span>
				<input
					required
					type="text"
					onChange={e => setStyle(e.target.value)}></input>
			</label>
		</form>
	);
}
