function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    // TODO: Implement logic
    const discountAmount = price * discountRate;
    const finalPrice = price - discountAmount;

    return finalPrice;
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    // TODO: Implement filtering logic
    return products.filter(callback);

}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    return inventory.sort(function (a, b) {
        if (a[key] < b[key]) {
            return -1;
        } else if (a[key] > b[key]) {
            return 1;
        } else {
            return 0;
        }
    });
}

const productArray = [
    { Name: "video games", price: 80 },
    { Name: "Magic Cards", price: 30 },
    { Name: "Nerd Stuff", price: 54 }
];

//console.log(filterProducts(productArray, item => item.Name === "video games"));

const inventoryArray = [
    { Name: "Tv", Price: 400 },
    { Name: "Xbox 360", Price: 250 },
    { Name: "Headphones", Price: 100 }
];

//console.log(sortInventory(inventoryArray, "Name"));


module.exports = { calculateDiscount, filterProducts, sortInventory, productArray, inventoryArray };
