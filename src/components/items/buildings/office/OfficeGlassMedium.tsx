import BaseItem from "../../BaseItem";
import img from "../../../../img/office-glass-medium.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class OfficeGlassMedium extends BaseItem {
    constructor() {
        super({
            width: 129,
            height: 252,
            xCorrection: -10,
            yCorrection: -16,
            img,
            isometricSize: {
                depth: 2,
                width: 4
            },
            tags: [
                TagsEnum.COMMERCIAL,
                TagsEnum.OFFICE,
                TagsEnum.TOWER,
                TagsEnum.MEDIUM
            ]
        });
    }
}