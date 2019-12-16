import BaseItem from "../../BaseItem";
import img from "../../../../img/tower-7-story.png";

export default class TowerSevenStory extends BaseItem {
    constructor() {
        super({
            width: 119,
            height: 236,
            xCorrection: -12,
            yCorrection: -16,
            img
        });
    }
}