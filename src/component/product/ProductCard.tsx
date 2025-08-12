import React from "react";
import { Product } from "@/constants/products";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className={styles.card}>
            <img src={product.image} alt={product.name} className={styles.image} />
            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.description}>{product.description}</p>
            <div className={styles.footer}>
                <span className={styles.price}>{product.price.toFixed(2)}TL</span>
                <span className={styles.rating}>★ {product.rating}</span>
            </div>
        </div>
    );
};
export default ProductCard;