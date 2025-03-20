import { useEffect } from "react";
import ItemList from "./components/ItemList";

// use the following link to get the data
// `/doors` will give you all the doors.
const API_URI = `https://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  // Get the existing item from the server
  const [items, setItems] = useState(null);
  // pass the item to UpdateItem as a prop

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URI);
        if (!response.ok) {
          console.log("Failed to fetch data");
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log("Error fetching items:", error);
      }
    };
    
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    try {
        const response = await fetch(`${API_URI}/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Failed to delete the item");
        }

        console.log("Item deleted successfully");
    } catch (error) {
        console.error("Error:", error.message);
    }
};

  return <ItemList key={items.id} items={items} ondel={handleDelete}/>;
}

export default App;
