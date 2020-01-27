import BaseItem from "../../BaseItem";
import img from "../../../../img/atc.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class AirTrafficControl extends BaseItem {
    constructor() {
        super({
            width: 99,
            height: 192,
            xCorrection: 1.5,
            yCorrection: -14,
            img,
            isometricSize: {
                depth: 2,
                width: 2
            },
            tags: [
                TagsEnum.AIRPORT
            ]
        });
    }
}