import BaseItem from "../../BaseItem";
import img from "../../../../img/office-3-story.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class OfficeThreeStory extends BaseItem {
    constructor() {
        super({
            width: 124,
            height: 128,
            xCorrection: 5,
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