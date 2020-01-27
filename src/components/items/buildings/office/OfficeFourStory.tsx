import BaseItem from "../../BaseItem";
import img from "../../../../img/office-4-story.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class OfficeFourStory extends BaseItem {
    constructor() {
        super({
            width: 116,
            height: 140,
            xCorrection: -6,
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