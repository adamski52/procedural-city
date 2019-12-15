import BaseItem from "../BaseItem";
import img from "../../../img/NW-NE.png";

export default class RoadNWNE extends BaseItem {
    constructor() {
        super({
            width: 430,
            height: 155,
            xCorrection: 0,
            yCorrection: -102,
            img
        });
    }
}