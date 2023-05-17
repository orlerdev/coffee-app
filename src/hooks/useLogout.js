import { auth } from "~/firebase/config";
import { signOut } from "firebase/auth";

export const useLogout = () => {
	const logout = () => {
		signOut(auth);
		try {
			console.log("User signed out.");
		} catch (e) {
			console.log(e.message);
		}
	};
	return { logout };
};
