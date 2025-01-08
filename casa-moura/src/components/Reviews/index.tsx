import { Product, Review } from "@/types/product";
import { Icon } from "@iconify/react/dist/iconify.js";
import useReviews from "./useReviews";

interface ReviewsProps {
  starSize?: number;
  counterSize?: number;
  reviews: Product["reviews"] | Review;
}

export default function Reviews({
  starSize = 16,
  counterSize = 12,
  reviews,
}: ReviewsProps) {
  const { ratingAverage } = useReviews(reviews);

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star, index) => (
        <Icon
          key={index}
          icon={`${ratingAverage() >= star ? "heroicons:star-solid" : "heroicons:star"}`}
          className={`text-[#FFA800]`}
          style={{ width: `${starSize}px`, height: `${starSize}px` }}
        />
      ))}
      {Array.isArray(reviews) && (
        <small
          className="text-text-light ml-1"
          style={{ fontSize: `${counterSize}px` }}
        >
          ({reviews.length ?? 0})
        </small>
      )}
    </div>
  );
}
