import BaseItem from "../BaseItem";
import img from "../../../img/SE-SW.png";

export default class RoadSESW extends BaseItem {
    constructor() {
        super({
            width: 430,
            height: 155,
            xCorrection: 0,
            yCorrection: -8,
            img
        });
    }
}