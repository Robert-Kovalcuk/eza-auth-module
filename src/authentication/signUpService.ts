import {getAuth, createUserWithEmailAndPassword, UserCredential} from "firebase/auth"
import firebaseApp from "../firebase/config"

const auth = getAuth(firebaseApp)

const service = {
	registerViaEmail(email: string, password: string): Promise<UserCredential> {
		return createUserWithEmailAndPassword(auth, email, password)
	}
}

export default service
