import ItemsService from './ItemsService';
import { TagsEnum } from "../interfaces/TagsEnum";
describe("ItemsService", () => {
    let itemsService:ItemsService;

    beforeEach(() => {
        itemsService = new ItemsService();
    });

    it("getItemsByTags should return all items if no meta specified", () => {
        let actual = itemsService.getItemsByTags([]);
        expect(actual.length).toEqual(116);
    });

    it("getItemsByTags should return all items matching a meta's key", () => {
        let actual = itemsService.getItemsByTags([TagsEnum.JUNK]);
        expect(actual.length).toEqual(8);

        actual = itemsService.getItemsByTags([TagsEnum.RESIDENTIAL]);
        expect(actual.length).toEqual(16);
    });
});
