import BaseItem from "../../BaseItem";
import img from "../../../../img/factory-very-large.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class FactoryVeryLarge extends BaseItem {
    constructor() {
        super({
            width: 196,
            height: 257,
            xCorrection: 8,
            yCorrection: -15,
            img,
            isometricSize: {
                depth: 5,
                width: 5
            },
            tags: [
                TagsEnum.INDUSTRIAL,
                TagsEnum.FACTORY,
                TagsEnum.XLARGE
            ]
        });
    }
}