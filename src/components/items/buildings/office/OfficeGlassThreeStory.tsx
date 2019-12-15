import BaseItem from "../../BaseItem";
import img from "../../../../img/office-glass-3-story.png";

export default class OfficeGlassThreeStory extends BaseItem {
    constructor() {
        super({
            width: 135,
            height: 135,
            xCorrection: 0,
            yCorrection: -16,
            img
        });
    }
}