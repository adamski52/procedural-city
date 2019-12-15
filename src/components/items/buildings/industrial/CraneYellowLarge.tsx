import BaseItem from "../../BaseItem";
import img from "../../../../img/crane-yellow-large.png";

export default class CraneYellowLarge extends BaseItem {
    constructor() {
        super({
            width: 189,
            height: 355,
            xCorrection: 16.5,
            yCorrection: -15,
            img
        });
    }
}