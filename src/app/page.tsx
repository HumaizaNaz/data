// import Products from "@/component/Products";
// const getData = async () => {
//   try {
//     const res = await fetch("https://jsonserver.reatbd.com/phone");
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     return res.json();
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return []; // Return an empty array in case of error
//   }
// };

// export default async function Home() {
//   const products = await getData();
//   return (
//     <div>
//       <Products products={products} />
//     </div>
//   );
// }
import CardProducts from '@/component/CardProducts'
import React from 'react'

const Home = () => {
  return (
    <div>
      <CardProducts/>
    </div>
  )
}

export default Home
