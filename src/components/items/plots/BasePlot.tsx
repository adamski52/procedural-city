import Item from "../BaseItem";
import { IPlotProps } from "../../../interfaces/PlotProps";

export default abstract class Plot extends Item {
    private items:Item[] = [];

    constructor(props:IPlotProps) {
        super({
            width: 754,
            height: 449,
            isometricSize: {
                depth: 20,
                width: 20
            },
            xCorrection: 0,
            yCorrection: 0,
            img: props.img,
            tags: props.tags
        });
    }

    public addItem(item:Item) {
        this.items.push(item);
        this.addChild(item);

        return this.items.length;
    }
}