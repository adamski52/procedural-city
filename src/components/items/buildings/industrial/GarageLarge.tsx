import BaseItem from "../../BaseItem";
import img from "../../../../img/garage-large.png";

export default class GarageLarge extends BaseItem {
    constructor() {
        super({
            width: 152,
            height: 154,
            xCorrection: 28,
            yCorrection: -15,
            img
        });
    }
}