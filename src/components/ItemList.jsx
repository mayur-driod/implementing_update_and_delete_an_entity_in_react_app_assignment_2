import Item from "./Item";

const ItemList = ({ items, ondel }) => {
    // your code here
    return (
        <>
            {items.map((item) => (
                <Item key={item.id} item={item} ondel={ondel} />
            ))}
        </>
    );
};

export default ItemList;
