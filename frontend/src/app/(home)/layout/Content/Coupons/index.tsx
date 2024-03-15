import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

import Coupon from "./Coupon";

export default function Coupons() {
  return (
    <section className="mt-20">
      <Container>
        <SectionTitle>Seleção de cupons</SectionTitle>
        <div className="mt-7 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Coupon
            label="mangueiras para áreas externas e industriais"
            coupon="mang10"
            discountPercentage={10}
            img="https://images.unsplash.com/photo-1626014186581-449dfb459e15?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Coupon
            label="torneiras para pias e paredes"
            coupon="torn10"
            discountPercentage={10}
            img="https://images.unsplash.com/photo-1521207418485-99c705420785?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Coupon
            label="disjuntores, cabos, fios e tomadas"
            coupon="eletro15"
            discountPercentage={15}
            img="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Coupon
            label="tintas, sprays, rolos e pincéis"
            coupon="paint20"
            discountPercentage={20}
            img="https://images.unsplash.com/photo-1535673774336-ef95d2851cf3?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </Container>
    </section>
  );
}
