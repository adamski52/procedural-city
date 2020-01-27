import BasePlot from "./BasePlot";
import img from "../../../img/cement.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class CementPlot extends BasePlot {
    constructor() {
        super({
            img,
            tags: [
                TagsEnum.PLOT,
                TagsEnum.CONCRETE
            ]
        });
    }
}