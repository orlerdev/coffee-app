import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export const useLogin = () => {
	const [error, setError] = useState(null);
	const login = async (email, password) => {
		try {
			const res = await signInWithEmailAndPassword(auth, email, password);
			setError(null);
		} catch (e) {
			setError(e.message);
		}
	};
	return { error, login };
};
