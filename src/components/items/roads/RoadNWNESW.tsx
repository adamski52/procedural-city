import BaseItem from "../BaseItem";
import img from "../../../img/NW-NE-SW.png";

export default class RoadNWNESW extends BaseItem {
    constructor() {
        super({
            width: 432,
            height: 249,
            xCorrection: 0,
            yCorrection: -8,
            img
        });
    }
}