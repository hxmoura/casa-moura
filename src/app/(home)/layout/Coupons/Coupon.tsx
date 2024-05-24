/* eslint-disable @next/next/no-img-element */
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

interface CouponProps {
  label: string;
  coupon: string;
  discountPercentage: number;
  img: string;
}

export default function Coupon({
  label,
  coupon,
  discountPercentage,
  img,
}: CouponProps) {
  return (
    <article className="bg-brand-primary w-full h-[150px] rounded-xl relative overflow-hidden">
      <div className="absolute right-0 w-1/2 h-full">
        <img src={img} alt={label} className="h-full w-full object-cover" />
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-r from-brand-primary to-[#34219f09]"></div>
      </div>
      <div className="bg-brand-secondary rounded-bl-xl py-2 px-4 absolute top-0 right-0">
        <strong className={`text-white font-black ${nunito.className}`}>
          {discountPercentage}% OFF
        </strong>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-11 md:left-20 max-w-72 mr-5">
        <h6
          className={`text-white font-black lg:text-xl mb-2 ${nunito.className}`}
        >
          {label.toUpperCase()}
        </h6>
        <p className={`text-white text-sm ${nunito.className}`}>
          *use o cupom{" "}
          <strong className="font-extrabold">{coupon.toUpperCase()}</strong>
        </p>
      </div>
      <div className="bg-white rounded-full w-14 h-14 absolute -left-7 top-1/2 -translate-y-1/2"></div>
      <div className="bg-white rounded-full w-14 h-14 absolute -right-7 top-1/2 -translate-y-1/2"></div>
    </article>
  );
}
