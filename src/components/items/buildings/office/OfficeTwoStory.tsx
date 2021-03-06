import BaseItem from "../../BaseItem";
import img from "../../../../img/office-2-story.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class OfficeTwoStory extends BaseItem {
    constructor() {
        super({
            width: 116,
            height: 104,
            xCorrection: -5,
            yCorrection: -15,
            img,
            isometricSize: {
                depth: 3,
                width: 3
            },
            tags: [
                TagsEnum.COMMERCIAL,
                TagsEnum.OFFICE
            ]
        });
    }
}