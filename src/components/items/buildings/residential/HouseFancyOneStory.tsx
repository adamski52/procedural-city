import BaseItem from "../../BaseItem";
import img from "../../../../img/house-fancy-1-story.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class HouseFancyOneStory extends BaseItem {
    constructor() {
        super({
            width: 94,
            height: 96,
            xCorrection: -13,
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