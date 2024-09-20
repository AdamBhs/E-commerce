import { useEffect, useState } from "react";

type RatingType = {
  rate: number;
  count: number;
};

type ClothingType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingType;
};

const useClothingData = () => {

  const [clothing, setClothing] = useState<ClothingType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchClothing = async () => {
      try {
        const mensClothingResponse = fetch('https://fakestoreapi.com/products/category/men\'s clothing');
        const womensClothingResponse = fetch('https://fakestoreapi.com/products/category/women\'s clothing');

        const [mensClothing, womensClothing] = await Promise.all([mensClothingResponse, womensClothingResponse]);

        const mensClothingData = await mensClothing.json();
        const womensClothingData = await womensClothing.json();

        setClothing([...mensClothingData, ...womensClothingData]);
      } catch (error) {
        setError('Error fetching clothing categories');
        console.error('Error fetching clothing categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClothing();
  }, []);

  return {clothing, loading, error}
}

export default useClothingData;