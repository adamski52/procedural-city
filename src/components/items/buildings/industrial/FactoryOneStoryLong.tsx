import BaseItem from "../../BaseItem";
import img from "../../../../img/factory-1-story-long.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class FactoryOneStoryLong extends BaseItem {
    constructor() {
        super({
            width: 160,
            height: 140,
            xCorrection: -31,
            yCorrection: -15,
            img,
            isometricSize: {
                depth: 2,
                width: 5
            },
            tags: [
                TagsEnum.INDUSTRIAL,
                TagsEnum.FACTORY
            ]
        });
    }
}