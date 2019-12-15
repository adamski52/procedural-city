import BaseItem from "../../BaseItem";
import img from "../../../../img/factory-2-story-2-stack.png";

export default class FactoryTwoStoryTwoStack extends BaseItem {
    constructor() {
        super({
            width: 174,
            height: 211,
            xCorrection: 7,
            yCorrection: -15,
            img
        });
    }
}