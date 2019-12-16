import BaseItem from "../../BaseItem";
import img from "../../../../img/plane-small-toward.png";

export default class PlaneSmallToward extends BaseItem {
    constructor() {
        super({
            width: 95,
            height: 58,
            xCorrection: -10,
            yCorrection: -40,
            img
        });
    }
}