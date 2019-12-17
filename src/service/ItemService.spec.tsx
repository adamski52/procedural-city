// import React from 'react';
import ItemsService from './ItemsService';

describe("ItemsService", () => {
    let itemsService:ItemsService;

    beforeEach(() => {
        itemsService = new ItemsService();
    });

    it("getItemsByMeta should return all items if no meta specified", () => {
        let actual = itemsService.getItemsByMeta([]);
        expect(actual.length).toEqual(120);
    });
});
