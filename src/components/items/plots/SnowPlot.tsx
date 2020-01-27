import BasePlot from "./BasePlot";
import img from "../../../img/snow.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class SnowPlot extends BasePlot {
    constructor() {
        super({
            img,
            tags: [
                TagsEnum.PLOT,
                TagsEnum.SNOW
            ]
        });
    }
}