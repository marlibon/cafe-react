function getMinCost ({ cost, properties }) {
    const arrCost = [];
    if (properties) {
        Object.keys(properties).forEach((item) => {
            arrCost.push(properties[item].cost);
        });
        const text = "от ";
        return `${text}${Math.min(...arrCost)}`;
    } else {
        return cost;
    }
}
export default getMinCost;