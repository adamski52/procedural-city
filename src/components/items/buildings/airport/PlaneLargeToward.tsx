import BaseItem from "../../BaseItem";
import img from "../../../../img/plane-large-toward.png";

export default class PlaneLargeToward extends BaseItem {
    constructor() {
        super({
            width: 138,
            height: 83,
            xCorrection: -12,
            yCorrection: -50,
            img
        });
    }
}