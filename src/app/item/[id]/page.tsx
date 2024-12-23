import { Metadata } from 'next';
import { products } from '@/app/data/getdata'; // Adjust path as necessary
import { Product } from '@/app/type/type'; // Adjust path as necessary

interface ProductPageProps {
  params: { id: string };
}

// Fetch dynamic routes
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// Generate metadata dynamically
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = products.find((product) => product.id === Number(params.id));
  return {
    title: product ? product.name : 'Product Not Found',
    description: product ? product.description : 'No product details available',
  };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const product = products.find((product) => product.id === Number(params.id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p><strong>Availability:</strong> {product.availability}</p>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Material:</strong> {product.material}</p>
      <img src={product.image} alt={product.name} style={{ maxWidth: '300px' }} />
    </div>
  );
};

export default ProductPage;
