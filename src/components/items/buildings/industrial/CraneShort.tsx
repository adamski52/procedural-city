import BaseItem from "../../BaseItem";
import img from "../../../../img/crane-short.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class CraneShort extends BaseItem {
    constructor() {
        super({
            width: 182,
            height: 220,
            xCorrection: -15.5,
            yCorrection: -15,
            img,
            tags: [
                TagsEnum.INDUSTRIAL,
                TagsEnum.CRANE,
                TagsEnum.SMALL
            ]
        });
    }
}