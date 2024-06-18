import Reviews from "@/components/Reviews";
import { Product } from "@/types/product";
import useReviews from "@/components/Reviews/useReviews";
import { Icon } from "@iconify/react/dist/iconify.js";

export function InformationsContent(product: Product) {
  return (
    <div className="mt-5 lg:mt-10 mb-14">
      <p>{product.description}</p>
      <table className="mt-16 border-collapse lg:max-w-[536px] w-full">
        <tbody>
          {Object.entries(product.informations).map(([key, value], index) => (
            <tr key={index} className="even:bg-background-softLight">
              <th className="border-2 border-background-softLight py-1 px-6 text-center lg:w-52 text-sm lg:text-base">
                {key}
              </th>
              <td className="border-2 border-background-softLight py-1 pl-3 text-left text-xs lg:text-sm">
                {value === "n/a" ? "Sem informação" : value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ReviewsContent(product: Product) {
  const { ratingAverage } = useReviews(product.reviews);

  function percentageOfReviews(n: number) {
    const noteFilter = product.reviews.filter(
      (review) => review.raiting === n,
    ).length;
    return Math.round((noteFilter / product.reviews.length) * 100);
  }

  return (
    <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 mt-5 lg:mt-10">
      <div className="flex flex-col gap-6 order-2 lg:order-1">
        {product.reviews.map((review, index) => (
          <div
            key={index}
            className="border border-background-softLight p-6 w-full rounded-lg"
          >
            <div className="flex items-center justify-between mb-1">
              <h6 className="font-medium text-base lg:text-lg">
                {review.title}
              </h6>
              <p className="text-text-light text-xs lg:text-sm ml-5">
                {review.date}
              </p>
            </div>
            <Reviews reviews={review} starSize={20} />
            <p className="text-xs lg:text-sm my-4">{review.description}</p>
            <small className="text-text-light text-xs lg:text-sm">
              Por {review.perfilName}
            </small>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-start lg:items-end order-1 lg:order-2">
        <strong className="font-semibold text-xl lg:text-2xl text-left lg:text-right">
          Nota {ratingAverage()}
        </strong>
        <p className="text-text-light text-left lg:text-right text-sm lg:text-base">
          {product.reviews.length} avaliações para este produto
        </p>
        <div className="flex flex-col gap-5 mt-9 w-full">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex items-center">
              <strong className="lg:text-xl font-medium lg:font-semibold mr-2">
                {5 - index}
              </strong>
              <Icon
                icon="heroicons:star-solid"
                className="w-6 h-6 lg:w-7 lg:h-7 text-[#FFA800]"
              />
              <div className="relative mx-4 w-full">
                <div className="w-full lg:w-60 h-2 bg-background-softLight rounded-2xl"></div>
                <div
                  className="absolute top-0 h-2 bg-[#FFA800] rounded-2xl"
                  style={{ width: `${percentageOfReviews(5 - index)}%` }}
                ></div>
              </div>
              <p className="font-medium text-xs lg:text-sm">
                {percentageOfReviews(5 - index)}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
