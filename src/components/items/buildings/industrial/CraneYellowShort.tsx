import BaseItem from "../../BaseItem";
import img from "../../../../img/crane-yellow-small.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class CraneYellowShort extends BaseItem {
    constructor() {
        super({
            width: 182,
            height: 220,
            xCorrection: -15.5,
            yCorrection: -15,
            img,
            isometricSize: {
                depth: 2,
                width: 2
            },
            tags: [
                TagsEnum.INDUSTRIAL,
                TagsEnum.CRANE,
                TagsEnum.SMALL,
                TagsEnum.ALTERNATE
            ]
        });
    }
}