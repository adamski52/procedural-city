import * as PIXI from "pixi.js";
import { IItemProps, IIsometricSize } from "../../interfaces/ItemProps";
import {TagsEnum} from "../../interfaces/TagsEnum";
import ConstantsService from "../../service/ConstantsService";

export default abstract class Item extends PIXI.Container {
    protected image:PIXI.Texture;
    protected sprite:PIXI.Sprite;
    protected spriteWidth:number;
    protected spriteHeight:number;
    protected xCorrection:number;
    protected yCorrection:number;
    protected tags:TagsEnum[];
    protected isometricSize:IIsometricSize;
    protected isometricX:number = 0;
    protected isometricY:number = 0;

    constructor(props:IItemProps) {
        super();

        this.spriteWidth = props.width;
        this.spriteHeight = props.height;

        this.xCorrection = props.xCorrection;
        this.yCorrection = props.yCorrection;

        this.tags = props.tags || [];

        this.isometricSize = props.isometricSize;

        this.image = PIXI.Texture.from(props.img);
        this.sprite = new PIXI.Sprite(this.image);
        this.sprite.anchor.x = .5;
        this.sprite.anchor.y = 1;
        this.addChild(this.sprite);
    }

    public setIsometricPosition(xSlot:number, ySlot:number) {
        this.isometricX = xSlot;
        this.isometricY = ySlot;

        let scaledX = this.isometricX * ConstantsService.ISO_SLOT_SIZE,
            scaledY = this.isometricY * ConstantsService.ISO_SLOT_SIZE,
            isoX = scaledX - scaledY,
            isoY = (scaledX + scaledY) / ConstantsService.ISO_RATIO;

        this.setPosition(isoX, isoY);
    }

    public getIsometricPosition() {
        return {
            x: this.isometricX,
            y: this.isometricY
        };
    }

    private setPosition(x:number, y:number) {
        this.x = (this.xCorrection + x);
        this.y = (this.yCorrection - y);
    }

    public getIsometricDepth() {
        return this.isometricSize.depth;
    }

    public getIsometricWidth() {
        return this.isometricSize.width;
    }

    public getWidth() {
        return this.spriteWidth;
    }

    public getHeight() {
        return this.spriteHeight;
    }

    public flip() {
        this.isometricSize = {
            width: this.isometricSize.depth,
            depth: this.isometricSize.width
        };
        
        this.scale.x = -1;
        this.xCorrection = -this.xCorrection;
    }

    public getTags() {
        return this.tags;
    }
}