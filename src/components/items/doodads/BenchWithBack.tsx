import BaseItem from "../BaseItem";
import img from "../../../img/bench-with-back.png";

export default class BenchFlat extends BaseItem {
    constructor() {
        super({
            width: 19,
            height: 19,
            xCorrection: 6,
            yCorrection: -14,
            img
        });
    }
}