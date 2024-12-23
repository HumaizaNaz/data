// import { getSingleProduct } from "@/helper";
// import Image from "next/image";
// import React from "react";

// type Props = {
//   searchParams?: { _id?: string };
// };

// const SingleProducts = async ({ searchParams }: Props) => {
//   // Validate and parse the _id
//   const _idString = searchParams?._id;
//   if (!_idString) {
//     // Handle the case where _id is missing
//     return <div>Product not found</div>;
//   }

//   const _id = Number(_idString);
//   if (isNaN(_id)) {
//     // Handle the case where _id is not a valid number
//     return <div>Invalid Product ID</div>;
//   }

//   try {
//     // Fetch the product based on the _id
//     const product = await getSingleProduct(_id);

//     if (!product) {
//       return <div>Product not found</div>;
//     }

//     return (
//       <div>
//         <h1>{product.title}</h1>
//         <Image src={product?.image} alt={product.title} width={500} height={500} />
//         {/* Display more product details as needed */}
//         <p>{product.description}</p>
//         <p>{product.price}</p>
//       </div>
//     );
//   } catch (error: unknown) {
//     // Type guard to check if error is an instance of Error
//     if (error instanceof Error) {
//       return <div>Error fetching product: {error.message}</div>;
//     } else {
//       // Fallback for cases where the error is not an instance of Error
//       return <div>An unknown error occurred</div>;
//     }}
// };

// export default SingleProducts;
