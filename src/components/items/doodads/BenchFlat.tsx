import BaseItem from "../BaseItem";
import img from "../../../img/bench-flat.png";

export default class BenchFlat extends BaseItem {
    constructor() {
        super({
            width: 23,
            height: 18,
            xCorrection: -3,
            yCorrection: -14,
            img
        });
    }
}