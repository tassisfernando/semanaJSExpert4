import { constants } from "../../_shared/constants.js";
import LobbyController from "./controller.js";
import LobbySocketBuilder from "./utils/lobbySocketBuilder.js";
import View from "./view.js";

const socketBuilder = new LobbySocketBuilder({
    socketUrl: constants.socketUrl,
    namespace: constants.socketNamespaces.lobby
})


const user = {
    img: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/pilot_traveller_person_avatar-256.png',
    username: 'Tassis Fernando ' + Date.now()
}

const dependencies = {
    socketBuilder,
    user,
    view: View
}

await LobbyController.initialize(dependencies)
