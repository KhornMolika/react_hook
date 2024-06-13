import ProductDetailCard from "../../components/common/cards/ProductDetailCard";
import { useLocation } from "react-router-dom";

export default function ProductDetail() {
    const location = useLocation();
    const product = location.state;
  return (
    <section className="flex justify-center items-center h-[90vh] mx-auto">
      <ProductDetailCard
        image={product.images[0]} title={product.title} description={product.description} price={product.price}/>
    </section>
  );
}
