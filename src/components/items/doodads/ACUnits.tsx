import BaseItem from "../BaseItem";
import img from "../../../img/AC-units.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class ACUnits extends BaseItem {
    constructor() {
        super({
            width: 127,
            height: 78,
            xCorrection: -24,
            yCorrection: -13,
            img,
            isometricSize: {
                depth: 2,
                width: 6
            },
            tags: [
                TagsEnum.JUNK,
                TagsEnum.AC_UNITS
            ]
        });
    }
}