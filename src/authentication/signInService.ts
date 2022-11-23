import {getAuth, signInWithEmailAndPassword, UserCredential, signOut} from "firebase/auth"
import firebaseApp from "../firebase/config"

const auth = getAuth(firebaseApp)

const service = {
	login(email: string, password: string): Promise<UserCredential> {
		return signInWithEmailAndPassword(auth, email, password)
	},

	logout(): Promise<void> {
		return signOut(auth)
	}
}

export default service
