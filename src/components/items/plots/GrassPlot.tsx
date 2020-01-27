import BasePlot from "./BasePlot";
import img from "../../../img/grass.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class GrassPlot extends BasePlot {
    constructor() {
        super({
            img,
            tags: [
                TagsEnum.PLOT,
                TagsEnum.GRASS
            ]
        });
    }
}