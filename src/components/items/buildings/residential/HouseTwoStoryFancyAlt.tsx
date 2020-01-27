import BaseItem from "../../BaseItem";
import img from "../../../../img/house-2-story-fancy-alt.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class HouseTwoStoryFancyAlt extends BaseItem {
    constructor() {
        super({
            width: 93,
            height: 123,
            xCorrection: -12,
            yCorrection: -16,
            img,
            tags: [
                TagsEnum.RESIDENTIAL,
                TagsEnum.HOUSE,
                TagsEnum.ALTERNATE
            ]
        });
    }
}