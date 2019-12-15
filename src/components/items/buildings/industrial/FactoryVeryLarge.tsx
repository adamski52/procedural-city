import BaseItem from "../../BaseItem";
import img from "../../../../img/factory-very-large.png";

export default class FactoryVeryLarge extends BaseItem {
    constructor() {
        super({
            width: 196,
            height: 257,
            xCorrection: 8,
            yCorrection: -15,
            img
        });
    }
}