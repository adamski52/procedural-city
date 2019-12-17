import BaseItem from "../../BaseItem";
import img from "../../../../img/house-fancy-corner.png";

export default class HouseFancyCorner extends BaseItem {
    constructor() {
        super({
            width: 103,
            height: 104,
            xCorrection: 0,
            yCorrection: -16,
            img
        });
    }
}