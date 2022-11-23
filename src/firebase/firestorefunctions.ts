import {getFirestore, setDoc, doc} from "firebase/firestore"
import app from "./config"

const db = getFirestore(app)

export default {
	linkFirebaseUserWithFastforwardUser: (email: string, token: string): Promise<void> => {
		return setDoc(doc(db, "user-ffw-tokens", email), {token})
	}
}
