import BaseItem from "../../BaseItem";
import img from "../../../../img/tower-plain-5-story.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class TowerPlainFiveStory extends BaseItem {
    constructor() {
        super({
            width: 106,
            height: 160,
            xCorrection: 21,
            yCorrection: -16,
            img,
            isometricSize: {
                depth: 3,
                width: 2
            },
            tags: [
                TagsEnum.RESIDENTIAL,
                TagsEnum.APARTMENT
            ]
        });
    }
}