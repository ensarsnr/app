import { useSelector } from 'react-redux'

function OrderOutput() {
    const items = useSelector((state) => state.denemeItems.elements);
    console.log(items)
    return (
        <div className=' mt-5'>
            sadfasd
            {items.map((e) => (
                <li>{e}</li>
            ))}
        </div>
    )
}

export default OrderOutput