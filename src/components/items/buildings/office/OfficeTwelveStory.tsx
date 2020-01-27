import BaseItem from "../../BaseItem";
import img from "../../../../img/office-12-story.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class OfficeTwelveStory extends BaseItem {
    constructor() {
        super({
            width: 111,
            height: 233,
            xCorrection: -4,
            yCorrection: -15,
            img,
            isometricSize: {
                depth: 3,
                width: 3
            },
            tags: [
                TagsEnum.COMMERCIAL,
                TagsEnum.TOWER
            ]
        });
    }
}