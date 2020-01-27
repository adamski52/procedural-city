import BaseItem from "../BaseItem";
import img from "../../../img/rose-bush.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class RoseBush extends BaseItem {
    constructor() {
        super({
            width: 21,
            height: 18,
            xCorrection: 0,
            yCorrection: -18,
            img,
            isometricSize: {
                depth: 1,
                width: 1
            },
            tags: [
                TagsEnum.DECORATION,
                TagsEnum.BUSH
            ]
        });
    }
}