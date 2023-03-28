import { useEffect, useState } from "react";

const Properties = ({ properties, onSelectProperties }) => {
    const [arrayProperties, setArrayProperties] = useState([{ name: '' }]);
    const slctNumIsArrPrpts = 2;

    useEffect(() => {
        properties && setArrayProperties(Object.keys(properties))
    }, [properties]);

    useEffect(() => {
        onSelectProperties(properties[slctNumIsArrPrpts])
    }, []);

    function handleChange (item) {
        onSelectProperties(item)
    }
    if (arrayProperties.length == 0) return;
    return (
        <form name="properties" className="input-radio">
            {arrayProperties.map((item, index) => {
                return (<label
                    htmlFor={properties[item]?.name}
                    className="input-radio_label"
                    key={index}
                >
                    <input
                        type="radio"
                        name="properties"
                        id={properties[item]?.name}
                        className="input-radio_radio"
                        value={properties[item]?.weight}
                        onChange={() => handleChange(properties[item])}
                        defaultChecked={index + 1 === slctNumIsArrPrpts}
                    />
                    <span className="input-radio_text">{properties[item]?.name}</span>
                </label>)
            })}
        </form >
    )

}
export default Properties