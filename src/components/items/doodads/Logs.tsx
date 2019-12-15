import BaseItem from "../BaseItem";
import img from "../../../img/logs.png";

export default class Logs extends BaseItem {
    constructor() {
        super({
            width: 19,
            height: 17,
            xCorrection: -1,
            yCorrection: -16,
            img
        });
    }
}