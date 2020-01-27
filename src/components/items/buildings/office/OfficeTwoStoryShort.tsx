import BaseItem from "../../BaseItem";
import img from "../../../../img/office-2-story-short.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class OfficeTwoStoryShort extends BaseItem {
    constructor() {
        super({
            width: 121,
            height: 105,
            xCorrection: 0,
            yCorrection: -15,
            img,
            tags: [
                TagsEnum.COMMERCIAL,
                TagsEnum.OFFICE
            ]
        });
    }
}