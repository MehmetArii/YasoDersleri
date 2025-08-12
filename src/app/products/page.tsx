'use client';

import React, { useState, useEffect } from "react";
import FilterSidebar from "@/component/product/FilterSidebar";
import { products } from "@/constants/products";
import ProductCard from "@/component/product/ProductCard";
import styles from "./page.module.scss";

const ProductsPage = () => {
    const [pageSize,setPageSize] = useState<number>(8);
    const [sortOrder, setSortOrder] = useState<'none' | 'price-asc' | 'price-desc' >('none');
    const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState<{ min: number; max: number } | null>(null);
    const [selectedRating, setSelectedRating] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleCategoryChange = (category: string) => {
        setSelectedCategory((prev) => {
            if (prev.includes(category)) {
                return prev.filter((item) => item !== category);
            }else {
                return [...prev, category];
            }
        });
    };
        const filteredProducts = products.filter((product) => {
        const categoryMatch = selectedCategory.length > 0
            ? selectedCategory.includes(product.category)
            : true;
        const priceMatch = selectedPriceRange
            ? product.price >= selectedPriceRange.min && product.price <= selectedPriceRange.max
            : true;
        const ratingMatch = selectedRating ? product.rating >= selectedRating : true;
        const q = searchQuery.trim();
        const name = (product.name ?? '');
        const desc = (product.description ?? '');
        const searchMatch = q.length === 0 || name.includes(q) || desc.includes(q);
        return categoryMatch && priceMatch && ratingMatch && searchMatch;
    });
        const sortedProducts = React.useMemo(() => {
            const copy = [...filteredProducts];
            if (sortOrder === 'price-asc') {
                copy.sort((a, b) => a.price - b.price);
            } else if (sortOrder === 'price-desc') {
                copy.sort((a, b) => b.price - a.price);
            }
            return copy;
        }, [filteredProducts, sortOrder]);
        const visibleProducts = React.useMemo(() => {
            return sortedProducts.slice(0,pageSize);
        }, [sortedProducts, pageSize])
    return (
        <>
        <div className={styles.toolbar}>
            <input type="text" className={styles.searchInput}
                placeholder="Ürün ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
                <label className={styles.sortLabel}>Sırala:
                    <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value as 'none' | 'price-asc' | 'price-desc')}
                        className={styles.sortSelect}>
                        <option value="none">Seçiniz</option>
                        <option value="price-asc">Fiyata Göre Artan</option>
                        <option value="price-desc">Fiyata Göre Azalan</option>
                    </select>
                </label>
            </div>
        <div className={styles.container}>
            <FilterSidebar
                onCategoryChange={handleCategoryChange}
                onPriceChange = {(min, max) => setSelectedPriceRange({ min, max })}  
                onRatingChange={(rating) => setSelectedRating(rating)}
            />
            <div className={styles.productGrid}>
            {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        </div>
        <div className={styles.pageSizeControl}>
            <label>
                Sayfa Başına:
                <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}
                >
                    <option value = {8}>8</option>
                    <option value = {12}>12</option>
                    <option value = {16}>16</option>
                    <option value = {24}>24</option>
                    <option value = {sortedProducts.length}>Tümü</option>
                </select>
            </label>
        </div>
        </>
    );
};
export default ProductsPage;