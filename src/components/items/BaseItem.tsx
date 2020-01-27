import * as PIXI from "pixi.js";
import { IItemProps } from "../../interfaces/ItemProps";
import {TagsEnum} from "../../interfaces/TagsEnum";

export default abstract class Item extends PIXI.Container {
    private image:PIXI.Texture;
    private sprite:PIXI.Sprite;
    private spriteWidth:number;
    private spriteHeight:number;
    private xCorrection:number;
    private yCorrection:number;
    private tags:TagsEnum[];

    constructor(props:IItemProps) {
        super();

        this.spriteWidth = props.width;
        this.spriteHeight = props.height;

        this.xCorrection = props.xCorrection;
        this.yCorrection = props.yCorrection;

        this.tags = props.tags || [];

        this.image = PIXI.Texture.from(props.img);
        this.sprite = new PIXI.Sprite(this.image);
        this.sprite.anchor.x = .5;
        this.sprite.anchor.y = 1;
        this.addChild(this.sprite);
    }

    public setPosition(x:number, y:number) {
        this.x = (this.xCorrection + x);
        this.y = (this.yCorrection - y);
    }

    public getWidth() {
        return this.spriteWidth;
    }

    public getHeight() {
        return this.spriteHeight;
    }

    public flip() {
        this.scale.x = -1;
        this.xCorrection = -this.xCorrection;
    }

    public getTags() {
        return this.tags;
    }
}