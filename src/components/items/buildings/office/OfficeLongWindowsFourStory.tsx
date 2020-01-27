import BaseItem from "../../BaseItem";
import img from "../../../../img/office-long-windows-4-story.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class OfficeLongWindowsFourStory extends BaseItem {
    constructor() {
        super({
            width: 127,
            height: 146,
            xCorrection: -11,
            yCorrection: -18,
            img,
            tags: [
                TagsEnum.COMMERCIAL,
                TagsEnum.OFFICE
            ]
        });
    }
}