import BaseItem from "../../BaseItem";
import img from "../../../../img/office-complex-fancy.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class OfficeComplexFancy extends BaseItem {
    constructor() {
        super({
            width: 377,
            height: 243,
            xCorrection: -9,
            yCorrection: -90,
            img,
            isometricSize: {
                depth: 6,
                width: 6
            },
            tags: [
                TagsEnum.COMMERCIAL,
                TagsEnum.OFFICE,
                TagsEnum.XLARGE
            ]
        });
    }
}