import { constants } from "../../_shared/constants.js";
import Media from "../../_shared/media.js";
import PeerBuilder from "../../_shared/peerBuilder.js";
import RoomSocketBuilder from "../util/roomSocket.js";
import RoomController from "./controller.js";
import RoomService from "./service.js";
import View from "./view.js";

const socketBuilder = new RoomSocketBuilder({
    socketUrl: constants.socketUrl,
    namespace: constants.socketNamespaces.room
});

const peerBuilder = new PeerBuilder({
    peerConfig: constants.peerConfig 
})

const roomService = new RoomService({
    media: Media
})

const urlParams = new URLSearchParams(window.location.search)
const keys = ['id', 'topic']

const urlData = keys.map((key) => [key, urlParams.get(key)])

const user = {
    img: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/pilot_traveller_person_avatar-256.png',
    username: 'taaaaassisfernando ' + Date.now()
}

const roomInfo = {
    room: { ...Object.fromEntries(urlData) },
    user
}

const dependencies = {
    view: View,
    socketBuilder, 
    roomInfo,
    roomService,
    peerBuilder,
}

await RoomController.initialize(dependencies);

