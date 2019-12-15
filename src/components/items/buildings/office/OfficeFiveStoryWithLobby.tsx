import BaseItem from "../../BaseItem";
import img from "../../../../img/office-5-story-with-lobby.png";

export default class OfficeFiveStoryWithLobby extends BaseItem {
    constructor() {
        super({
            width: 79,
            height: 176,
            xCorrection: 2,
            yCorrection: -15,
            img
        });
    }
}