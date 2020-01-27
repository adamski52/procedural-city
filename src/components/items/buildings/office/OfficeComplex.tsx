import BaseItem from "../../BaseItem";
import img from "../../../../img/office-complex.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class OfficeComplex extends BaseItem {
    constructor() {
        super({
            width: 204,
            height: 170,
            xCorrection: 30,
            yCorrection: -24,
            img,
            tags: [
                TagsEnum.COMMERCIAL,
                TagsEnum.OFFICE,
                TagsEnum.LARGE
            ]
        });
    }
}