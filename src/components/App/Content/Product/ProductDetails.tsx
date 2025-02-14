// ProductDetails.tsx
import type { Product } from '@/@types/index';
import Modal from '@/components/ui/Modal/Modal';

type ProductsDetailsProps = {
  product: Product;
  onClose: () => void;
};

function ProductsDetails({ product, onClose }: ProductsDetailsProps) {
  return (
    // *1
    <Modal onClose={onClose}>
      <img loading="lazy" src={product.images[0]} alt="" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </Modal>
  );
}
export default ProductsDetails;
