const { calculateDiscount, filterProducts, sortInventory, productArray, inventoryArray } = require('../products');
//Positive
describe("Calculate Discount", () => {
    test("Should calculate disccount ", () => {
        expect(calculateDiscount(100, .1)).toEqual(90)
    });
    //nEGATIVE
    test("Should account for negative numbers ", () => {
        expect(calculateDiscount(100, -.1)).not.toEqual(90)
    });
    //Edge
    test("Should be edge case", () => {
        expect(calculateDiscount(100, "")).toEqual(null)
    });

});
//Postivie
describe("Filter Products", () => {
    test("Should return item in an array", () => {
        expect(filterProducts(productArray, item => item.Name === "Magic Cards")).toEqual([{ Name: "Magic Cards", price: 30 }])
    })
    //Negative
    test("Should return an enpty array", () => {
        expect(filterProducts(productArray, item => item.Name === "Pokemon Cards")).toEqual([])
    })
    //Edge
    test("Should return empty array, if we don't pass the product array", () => {
        expect(filterProducts('this is not an array', () => true)).toEqual([]);
    })
});
//Positive
describe("Sort Inventory", () => {
    test("Should return sorted Array by price", () => {
        expect(sortInventory(inventoryArray, "Price")).toEqual([
            { Name: "Headphones", Price: 100 },
            { Name: "Xbox 360", Price: 250 },
            { Name: "Tv", Price: 400 }
        ]);
    })
    //Negative
    test("Should return empty array for bad user input", () => {
        expect(sortInventory("not an array", "Price")).toEqual([]);
    })
    //Edge
    test("Should return unsorted array", () => {
        expect(sortInventory(inventoryArray, "Fun Meter")).toEqual(inventoryArray);
    })
})