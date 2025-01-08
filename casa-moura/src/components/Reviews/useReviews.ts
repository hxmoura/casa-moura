import { Product, Review } from "@/types/product";

export default function useReviews(reviews: Product["reviews"] | Review) {
  function ratingAverage() {
    if (Array.isArray(reviews)) {
      const ratingSum = reviews
        .map((review) => review.raiting)
        .reduce((acc, value) => acc + value, 0);

      return reviews && Math.round(ratingSum / reviews.length);
    }

    return reviews.raiting;
  }

  return { ratingAverage };
}
