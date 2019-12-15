import BaseItem from "../../BaseItem";
import img from "../../../../img/garage-medium.png";

export default class GarageMedium extends BaseItem {
    constructor() {
        super({
            width: 103,
            height: 119,
            xCorrection: 4,
            yCorrection: -15,
            img
        });
    }
}