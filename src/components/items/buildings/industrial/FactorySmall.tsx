import BaseItem from "../../BaseItem";
import img from "../../../../img/factory-small.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class FactorySmall extends BaseItem {
    constructor() {
        super({
            width: 84,
            height: 91,
            xCorrection: 7,
            yCorrection: -15,
            img,
            tags: [
                TagsEnum.INDUSTRIAL,
                TagsEnum.FACTORY,
                TagsEnum.SMALL
            ]
        });
    }
}