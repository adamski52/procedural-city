import BaseItem from "../../BaseItem";
import img from "../../../../img/runway.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class Runway extends BaseItem {
    constructor() {
        super({
            width: 461,
            height: 265,
            xCorrection: 147,
            yCorrection: -15,
            img,
            isometricSize: {
                depth: 20,
                width: 3
            },
            tags: [
                TagsEnum.AIRPORT,
                TagsEnum.RUNWAY
            ]
        });
    }
}