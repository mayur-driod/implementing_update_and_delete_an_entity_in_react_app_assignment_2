const Item = ({ item, ondel }) => {

    // Render a single item
    // Add a Delete and Edit button
    return(
        <>
            <div>
                <h1>{item.id}</h1>
                <p>{item.name}</p>
                <p>{item.status}</p>
                <div>
                    <button onClick={(e)=>ondel(item.id)}>Delete</button>
                    <button>Edit</button>
                </div>
            </div>
        </>
    )
};

export default Item;
