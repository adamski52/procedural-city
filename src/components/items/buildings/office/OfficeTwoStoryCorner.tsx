import BaseItem from "../../BaseItem";
import img from "../../../../img/office-2-story-corner.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class OfficeTwoStoryCorner extends BaseItem {
    constructor() {
        super({
            width: 101,
            height: 106,
            xCorrection: 8,
            yCorrection: -15,
            img,
            isometricSize: {
                depth: 3,
                width: 2
            },
            tags: [
                TagsEnum.COMMERCIAL,
                TagsEnum.OFFICE
            ]
        });
    }
}