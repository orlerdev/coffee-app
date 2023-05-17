"use client";
import { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
	const [error, setError] = useState(null);

	const signup = async (email, password) => {
		setError(null);
		createUserWithEmailAndPassword(auth, email, password);
		try {
			const res = () => {
				console.log("User signed up:", res.user);
			};
		} catch (e) {
			setError(e.message);
		}
	};

	return { error, signup };
};
