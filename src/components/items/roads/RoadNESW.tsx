import BaseItem from "../BaseItem";
import img from "../../../img/NE-SW.png";

export default class RoadNESW extends BaseItem {
    constructor() {
        super({
            width: 429,
            height: 248,
            xCorrection: 0,
            yCorrection: -8,
            img
        });
    }
}