import BaseItem from "../../BaseItem";
import img from "../../../../img/office-glass-short.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class OfficeGlassShort extends BaseItem {
    constructor() {
        super({
            width: 113,
            height: 111,
            xCorrection: 0,
            yCorrection: -16,
            img,
            isometricSize: {
                depth: 3,
                width: 3
            },
            tags: [
                TagsEnum.COMMERCIAL,
                TagsEnum.OFFICE,
                TagsEnum.TOWER,
                TagsEnum.SMALL
            ]
        });
    }
}