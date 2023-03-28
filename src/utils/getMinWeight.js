function getMinWeight (product) {
    const arrWeight = [];
    if (product.properties) {
        Object.keys(product.properties).forEach((item) => {
            arrWeight.push(product.properties[item].weight);
        });
        return arrWeight[0];
    } else {
        return product.weight;
    }
}
export default getMinWeight;