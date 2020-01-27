import BaseItem from "../BaseItem";
import img from "../../../img/light-post.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class LightPost extends BaseItem {
    constructor() {
        super({
            width: 6,
            height: 29,
            xCorrection: 0,
            yCorrection: -14,
            img,
            isometricSize: {
                depth: 1,
                width: 1
            },
            tags: [
                TagsEnum.DECORATION,
                TagsEnum.LIGHT
            ]
        });
    }
}