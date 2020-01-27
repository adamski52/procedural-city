import BaseItem from "../../BaseItem";
import img from "../../../../img/factory-2-story-2-stack.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class FactoryTwoStoryTwoStack extends BaseItem {
    constructor() {
        super({
            width: 174,
            height: 211,
            xCorrection: 7,
            yCorrection: -15,
            img,
            isometricSize: {
                depth: 5,
                width: 5
            },
            tags: [
                TagsEnum.INDUSTRIAL,
                TagsEnum.FACTORY
            ]
        });
    }
}