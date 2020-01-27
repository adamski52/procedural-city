import BaseItem from "../BaseItem";
import img from "../../../img/smoke-stacks.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class Smokestacks extends BaseItem {
    constructor() {
        super({
            width: 161,
            height: 108,
            xCorrection: -32,
            yCorrection: -15,
            img,
            tags: [
                TagsEnum.JUNK,
                TagsEnum.SMOKESTACK
            ]
        });
    }
}