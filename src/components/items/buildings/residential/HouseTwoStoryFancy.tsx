import BaseItem from "../../BaseItem";
import img from "../../../../img/house-2-story-fancy.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class HouseTwoStoryFancy extends BaseItem {
    constructor() {
        super({
            width: 85,
            height: 111,
            xCorrection: 12,
            yCorrection: -16,
            img,
            isometricSize: {
                depth: 2,
                width: 2
            },
            tags: [
                TagsEnum.RESIDENTIAL,
                TagsEnum.HOUSE
            ]
        });
    }
}