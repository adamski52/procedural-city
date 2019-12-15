import BaseItem from "../../BaseItem";
import img from "../../../../img/house-2-story.png";

export default class HouseTwoStory extends BaseItem {
    constructor() {
        super({
            width: 83,
            height: 96,
            xCorrection: 9,
            yCorrection: -16,
            img
        });
    }
}