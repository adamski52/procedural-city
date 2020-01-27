import BaseItem from "../../BaseItem";
import img from "../../../../img/factory-small-tall.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class FactorySmallTall extends BaseItem {
    constructor() {
        super({
            width: 76,
            height: 226,
            xCorrection: 2,
            yCorrection: -15,
            img,
            tags: [
                TagsEnum.INDUSTRIAL,
                TagsEnum.FACTORY
            ]
        });
    }
}