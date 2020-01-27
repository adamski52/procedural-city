import BaseItem from "../../BaseItem";
import img from "../../../../img/office-1-story.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class OfficeOneStory extends BaseItem {
    constructor() {
        super({
            width: 189,
            height: 138,
            xCorrection: 8,
            yCorrection: -15,
            img,
            isometricSize: {
                depth: 4,
                width: 4
            },
            tags: [
                TagsEnum.COMMERCIAL,
                TagsEnum.OFFICE
            ]
        });
    }
}