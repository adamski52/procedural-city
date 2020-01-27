import BaseItem from "../../BaseItem";
import img from "../../../../img/office-glass-large.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class OfficeGlassLarge extends BaseItem {
    constructor() {
        super({
            width: 120,
            height: 308,
            xCorrection: 15,
            yCorrection: -14,
            img,
            isometricSize: {
                depth: 4,
                width: 2
            },
            tags: [
                TagsEnum.COMMERCIAL,
                TagsEnum.OFFICE,
                TagsEnum.TOWER,
                TagsEnum.LARGE
            ]
        });
    }
}