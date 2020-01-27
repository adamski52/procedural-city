import BaseItem from "../BaseItem";
import img from "../../../img/fountain.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class Fountain extends BaseItem {
    constructor() {
        super({
            width: 48,
            height: 38,
            xCorrection: 1,
            yCorrection: -18,
            img,
            tags: [
                TagsEnum.DECORATION,
                TagsEnum.FOUNTAIN
            ]
        });
    }
}