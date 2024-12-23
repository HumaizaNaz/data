

const getData = async () => {
    const res = await fetch("https://jsonserver.reatbd.com/phone");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  };
  
  export const getSingleProduct = async (_id: number) => {
    const items = await getData();
    const singleItem = items.find((product: any) => product._id === _id);
  
    // Check if product is found, if not, throw an error or return null
    if (!singleItem) {
      throw new Error(`Product with ID ${_id} not found`);
    }
  
    return singleItem;
  };
  