
export function saveToLocalStorage (cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}
export function addItem (cart, item) {
    let existingItem = cart.find(
        (i) => i.id === item.id && i.weight === item.weight
    );
    if (existingItem) {
        existingItem.quantity += item.quantity;
    } else {
        cart.push(item);
    }
    return cart
}
export function countQuantity (cart) {
    let quantity = 0;
    cart.forEach((item) => {
        quantity += item.quantity;
    });
    return quantity;
}
export function countCost (cart) {
    let cost = 0;
    cart.forEach((item) => {
        cost += item.cost * item.quantity;
    });
    return cost;
}