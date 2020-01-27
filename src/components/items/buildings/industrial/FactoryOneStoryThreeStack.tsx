import BaseItem from "../../BaseItem";
import img from "../../../../img/factory-1-story-3-stacks.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class FactoryOneStoryThreeStack extends BaseItem {
    constructor() {
        super({
            width: 155,
            height: 153,
            xCorrection: -21,
            yCorrection: -15,
            img,
            tags: [
                TagsEnum.INDUSTRIAL,
                TagsEnum.FACTORY
            ]
        });
    }
}