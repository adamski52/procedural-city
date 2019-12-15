import BaseItem from "../BaseItem";
import img from "../../../img/car.png";

export default class Car extends BaseItem {
    constructor() {
        super({
            width: 43,
            height: 36,
            xCorrection: 5,
            yCorrection: -16,
            img
        });
    }
}