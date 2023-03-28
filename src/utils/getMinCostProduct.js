function getMinCost ({ cost, properties }, text = "") {
    const arrCost = [];
    if (properties) {
        Object.keys(properties).forEach((item) => {
            arrCost.push(properties[item].cost);
        });
        return `${text}${Math.min(...arrCost)}`;
    } else {
        return cost;
    }
}
export default getMinCost;