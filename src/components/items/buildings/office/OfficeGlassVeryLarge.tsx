import BaseItem from "../../BaseItem";
import img from "../../../../img/office-glass-very-large.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class OfficeGlassVeryLarge extends BaseItem {
    constructor() {
        super({
            width: 145,
            height: 328,
            xCorrection: -4,
            yCorrection: -18,
            img,
            isometricSize: {
                depth: 3,
                width: 3
            },
            tags: [
                TagsEnum.COMMERCIAL,
                TagsEnum.OFFICE,
                TagsEnum.XLARGE
            ]
        });
    }
}