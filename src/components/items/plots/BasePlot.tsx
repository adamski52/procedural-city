import Item from "../BaseItem";
import { IPlotProps } from "../../../interfaces/PlotProps";

export default abstract class Plot extends Item {
    private items:Item[] = [];
    private isoRatio:number = 8.6/5;
    private isoSlots:number = 20;
    private areaSize:number = 340;
    private isoSlotSize = this.areaSize / this.isoSlots;

    constructor(props:IPlotProps) {
        super({
            width: 754,
            height: 449,
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

    public setItemIsometricPosition(itemIndex:number, x:number, y:number) {
        let item = this.items[itemIndex - 1];
        if(!item) {
            return;
        }
        
        let isoX = x - y,
            isoY = (x + y) / this.isoRatio;

        item.setPosition(isoX, isoY);
    }

    public setItemSlotPosition(itemIndex:number, slotX:number, slotY:number) {
        let x = this.isoSlotSize * slotX,
            y = this.isoSlotSize * slotY;

        this.setItemIsometricPosition(itemIndex, x, y);
    }
}