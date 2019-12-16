import BaseItem from "../BaseItem";
import img from "../../../img/topiary.png";

export default class Topiary extends BaseItem {
    constructor() {
        super({
            width: 26,
            height: 49,
            xCorrection: 1,
            yCorrection: -15,
            img
        });
    }
}