import BaseItem from "../../BaseItem";
import img from "../../../../img/factory-with-garages.png";

export default class FactoryWithGarages extends BaseItem {
    constructor() {
        super({
            width: 194,
            height: 200,
            xCorrection: -24,
            yCorrection: -15,
            img
        });
    }
}