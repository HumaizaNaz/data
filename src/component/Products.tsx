// "use client"
// import Link from 'next/link';
// import React from 'react'
// import Image from 'next/image';

// interface ProductsProps{
//     _id:number;
//     title:string;
//     description:string;
//     image:string;
//     price:number;
//     oldPrice:number;
//     isNew:boolean;
//     category:string;
//     brand:string;
// }

// interface Props{
//     products: ProductsProps[]
// }

// const Products = ({products}: Props) => {
//   return (
//     <div> 
//         {products.map((item) => (
//             <Link 
//                 href={{pathname:"/singleproducts", query:{id: item._id}}} 
//                 key={item._id}
//             >
//                 <div className="relative aspect-w-1 aspect-h-1 w-[239px] h-[280px] overflow-hidden rounded-lg">
//                     <Image
//                         src={item.image}
//                         alt={item.title}  
//                         layout="fill"
//                         objectFit="cover"
//                         className="group-hover:scale-105 transition-transform duration-200"
//                     />
//                 </div>
//                 <div className="mt-2 h-[118px] w-[239px] px-[25px] py-[36px] space-y-2">
//                     <h3 className="text-xl font-bold pl-[24px] text-black">{item.title}</h3>
//                     <h5 className="text-xl font-bold text-gray-400">{item.brand}</h5>
//                     <div className="pl-[24px] flex justify-start gap-3">
//                         <p className="text-lg font-bold text-gray-500">{item.oldPrice}</p>
//                         <p className="text-lg font-bold text-green-900">{item.price}</p>
//                     </div>
//                 </div>
//             </Link>
//         ))}
//     </div>
//   );
// }

// export default Products;
