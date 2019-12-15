import BaseItem from "../BaseItem";
import img from "../../../img/NE-SE-SW.png";

export default class RoadNESESW extends BaseItem {
    constructor() {
        super({
            width: 430,
            height: 248,
            xCorrection: 0,
            yCorrection: -8,
            img
        });
    }
}