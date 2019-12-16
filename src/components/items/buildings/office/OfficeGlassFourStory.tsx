import BaseItem from "../../BaseItem";
import img from "../../../../img/office-glass-4-story.png";

export default class OfficeGlassFourStory extends BaseItem {
    constructor() {
        super({
            width: 103,
            height: 115,
            xCorrection: 0,
            yCorrection: -16,
            img
        });
    }
}