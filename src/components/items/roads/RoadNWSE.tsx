import BaseItem from "../BaseItem";
import img from "../../../img/NW-SE.png";

export default class RoadNWSE extends BaseItem {
    constructor() {
        super({
            width: 431,
            height: 249,
            xCorrection: 0,
            yCorrection: -8,
            img
        });
    }
}