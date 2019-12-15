import BaseItem from "../BaseItem";
import img from "../../../img/NE-SE.png";

export default class RoadNESE extends BaseItem {
    constructor() {
        super({
            width: 268,
            height: 248,
            xCorrection: 82,
            yCorrection: -8,
            img
        });
    }
}