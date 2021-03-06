import BaseItem from "../BaseItem";
import img from "../../../img/van.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class Van extends BaseItem {
    constructor() {
        super({
            width: 54,
            height: 48,
            xCorrection: 8,
            yCorrection: -17,
            img,
            isometricSize: {
                depth: 1,
                width: 1
            },
            tags: [
                TagsEnum.VEHICLE,
                TagsEnum.VAN
            ]
        });
    }
}