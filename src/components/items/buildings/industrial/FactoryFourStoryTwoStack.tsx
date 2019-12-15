import BaseItem from "../../BaseItem";
import img from "../../../../img/factory-4-story-2-stack.png";

export default class FactoryFourStoryTwoStack extends BaseItem {
    constructor() {
        super({
            width: 106,
            height: 194,
            xCorrection: 22,
            yCorrection: -15,
            img
        });
    }
}