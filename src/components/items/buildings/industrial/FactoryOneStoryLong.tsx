import BaseItem from "../../BaseItem";
import img from "../../../../img/factory-1-story-long.png";

export default class FactoryOneStoryLong extends BaseItem {
    constructor() {
        super({
            width: 160,
            height: 140,
            xCorrection: -31,
            yCorrection: -15,
            img
        });
    }
}