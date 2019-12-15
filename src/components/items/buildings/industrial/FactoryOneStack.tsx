import BaseItem from "../../BaseItem";
import img from "../../../../img/factory-1-stack.png";

export default class FactoryOneStack extends BaseItem {
    constructor() {
        super({
            width: 76,
            height: 156,
            xCorrection: 0.5,
            yCorrection: -15,
            img
        });
    }
}