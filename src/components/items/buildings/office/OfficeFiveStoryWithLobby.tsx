import BaseItem from "../../BaseItem";
import img from "../../../../img/office-5-story-with-lobby.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class OfficeFiveStoryWithLobby extends BaseItem {
    constructor() {
        super({
            width: 79,
            height: 176,
            xCorrection: 2,
            yCorrection: -15,
            img,
            isometricSize: {
                depth: 3,
                width: 3
            },
            tags: [
                TagsEnum.COMMERCIAL,
                TagsEnum.OFFICE,
                TagsEnum.TOWER
            ]
        });
    }
}