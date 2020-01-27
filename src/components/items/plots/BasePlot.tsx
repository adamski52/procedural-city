import Item from "../BaseItem";
import { IPlotProps } from "../../../interfaces/PlotProps";
import ConstantsService from "../../../service/ConstantsService";

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

    public setItemIsometricPosition(itemIndex:number, x:number, y:number) {
        let item = this.items[itemIndex - 1];
        if(!item) {
            return;
        }
        
        let isoX = x - y,
            isoY = (x + y) / ConstantsService.ISO_RATIO;

        item.setPosition(isoX, isoY);
    }

    public setItemSlotPosition(itemIndex:number, slotX:number, slotY:number) {
        let x = ConstantsService.ISO_SLOT_SIZE * slotX,
            y = ConstantsService.ISO_SLOT_SIZE * slotY;

        this.setItemIsometricPosition(itemIndex, x, y);
    }
}