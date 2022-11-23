import PortalClient from "@chaosinsight/portalclient";

export default class FfwPortalClient {
    public client: PortalClient


    constructor() {
        this.client = new PortalClient("", "v6", null, "SessionGUID", true)
    }
}