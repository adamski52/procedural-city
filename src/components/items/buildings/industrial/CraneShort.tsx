import BaseItem from "../../BaseItem";
import img from "../../../../img/crane-short.png";

export default class CraneShort extends BaseItem {
    constructor() {
        super({
            width: 182,
            height: 220,
            xCorrection: -15.5,
            yCorrection: -15,
            img
        });
    }
}