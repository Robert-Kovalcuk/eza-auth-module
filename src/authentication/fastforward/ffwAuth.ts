import {EZPermission, IPortalResponse} from "@fastforward-digitisation/ezarchive-portalclient";
import {ISession} from "@chaosinsight/portalclient";
import FfwPortalClient from "./ffwPortalClient";

const ffwPortalClient = new FfwPortalClient()
const extensionHandler = ffwPortalClient.client.call

export default class FfwAuth {
	public createSession(): void {
		extensionHandler.session.createGet().response.then((res: any) => {
			console.log(res)
		})
	}

	public async login(email: string, password: string): Promise<IPortalResponse<ISession>> {
		if(!ffwPortalClient.client.hasSession)
			await extensionHandler.session.createGet()

		return extensionHandler.emailPassword.loginPost(email, password).response.then((response: any) => response)
	}

	public async register(uniqueAuthToken: string): Promise<unknown> {
		if(!ffwPortalClient.client.hasSession)
			await extensionHandler.session.createGet()

		return extensionHandler.ezUser.setPost(uniqueAuthToken, uniqueAuthToken, EZPermission.administrator, null, undefined, uniqueAuthToken)
	}
}
