import React from "react";
import { categories, priceRanges, ratings } from "@/constants/filters";
import styles from "./FilterSidebar.module.scss";

interface FilterSidebarProps {
    onCategoryChange: (category: string) => void;
    onPriceChange: (min: number, max: number) => void;
    onRatingChange: (rating: number) => void;
}

const FilterSidebar = ({
    onCategoryChange,
    onPriceChange,
    onRatingChange,
}: FilterSidebarProps) => {
    return (
        <aside className={styles.sidebar}>
            <h3>Filtreler</h3>
            <section className={styles.section}>
                <h4>Kategori</h4>
                {categories.map((category) => (
                    <label key={category} className={styles.option}>
                        <input
                            type="checkbox"
                            value={category}
                            onChange={() => onCategoryChange(category)}
                        />
                        {category}
                    </label>
                ))}
            </section>
            <section className={styles.section}>
                <h4>Fiyat Aralığı</h4>
                {priceRanges.map((range) => (
                    <label key={range.label} className={styles.option}>
                        <input
                            type="radio"
                            name="price"
                            onChange={() => onPriceChange(range.min, range.max)}
                        />
                        {range.label}
                    </label>
                ))}
                <label className={styles.option}>
                    <input
                        type="radio"
                        name="price"
                        defaultChecked
                        onChange={() => onPriceChange(0, Infinity)}
                    />
                    Tümünü Göster
                </label>
            </section>
            <section className={styles.section}>
                <h4>Yıldız Derecelendirmesi</h4>
                {ratings.map((rating) => (
                    <label key={rating} className={styles.option}>
                        <input
                            type="radio"
                            name="rating"
                            onChange={() => onRatingChange(rating)}
                        />
                        {rating} ⭐ ve üzeri
                    </label>
                ))}
                <label className={styles.option}>
                    <input
                        type="radio"
                        name="rating"
                        defaultChecked
                        onChange={() => onRatingChange(0)}
                    />
                    Tümünü Göster
                </label>
            </section>
        </aside>
    );
};
export default FilterSidebar;

        