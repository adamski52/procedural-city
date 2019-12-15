import BaseItem from "../../BaseItem";
import img from "../../../../img/factory-4-story.png";

export default class FactoryFourStoryOneStack extends BaseItem {
    constructor() {
        super({
            width: 160,
            height: 233,
            xCorrection: -7,
            yCorrection: -15,
            img
        });
    }
}