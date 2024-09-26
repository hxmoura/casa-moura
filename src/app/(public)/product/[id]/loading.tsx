import Container from "@/components/Container";
import FooterLoading from "@/components/Footer/FooterLoading";
import HeaderFullLoading from "@/components/Header/HeaderFullLoading";
import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <>
      <HeaderFullLoading />
      <main className="my-10 lg:my-28">
        <Container>
          <section className="flex flex-col lg:flex-row gap-20">
            {/* Images */}
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 lg:w-1/2">
              <div className="flex lg:flex-col items-center gap-6 order-2 lg:order-1">
                <Skeleton className="rounded-full h-16 w-16" repetitions={4} />
              </div>
              <Skeleton className="w-[424px] h-[424px] rounded-2xl order-1 lg:order-2" />
            </div>

            {/* Informations */}
            <div className="lg:w-1/2">
              <Skeleton className="rounded-md h-7 w-full mb-2" />
              <Skeleton className="rounded-md h-5 w-56 mb-2" />
              <Skeleton className="rounded-md h-5 w-32 mb-6" />
              <Skeleton className="rounded-md h-5 w-20 mb-2" />
              <Skeleton className="rounded-md h-7 w-36 mb-6" />
              <Skeleton className="rounded-md h-5 w-52 mb-4" repetitions={2} />
              <div className="flex flex-col lg:flex-row lg:max-w-[424px] w-full gap-6 mt-7 mb-10">
                <Skeleton className="rounded-md h-12 max-w-36 w-full" />
                <Skeleton className="rounded-md h-12 w-full" />
              </div>
              <div className="border border-background-softLight p-7 w-full lg:max-w-[424px] rounded-lg">
                <Skeleton className="rounded-md h-3 w-44 mb-5" />
                <div className="flex flex-col md:flex-row gap-6 ">
                  <div className="w-full">
                    <Skeleton className="rounded-md h-10 w-full" />
                    <Skeleton className="rounded-md h-3 w-44 mt-2" />
                  </div>
                  <Skeleton className="rounded-md h-10 w-full md:max-w-28" />
                </div>
              </div>
            </div>
          </section>

          {/* Menu Mobile */}
          <section className="mt-20 lg:hidden">
            <div className="border-b border-background-softLight pb-5 flex justify-between items-center mb-6">
              <Skeleton className="rounded-md w-60 h-7" />
              <Skeleton className="rounded-md w-5 h-5" />
            </div>
            <div className="border-b border-background-softLight pb-5 flex justify-between items-center">
              <Skeleton className="rounded-md w-60 h-7" />
              <Skeleton className="rounded-md w-5 h-5" />
            </div>
          </section>

          {/* Menu Desktop */}
          <section className="mt-20 lg:mt-40 hidden lg:block">
            <div className="flex gap-12 border-b border-background-softLight pb-5">
              <Skeleton className="h-6 w-72 rounded-md" repetitions={2} />
            </div>
            <div className="flex flex-col gap-1 mt-10">
              <Skeleton className="h-6 w-full rounded-md" repetitions={3} />
            </div>
            <Skeleton className="h-40 w-[536px] rounded-md mt-11" />
          </section>

          {/* Recommendations */}
          <div className="my-24 overflow-hidden">
            <Skeleton className="h-6 w-64 rounded-md" />
            <div className="flex gap-6 mt-7">
              <Skeleton
                className="min-w-[220px] h-[400px] rounded-lg"
                repetitions={6}
              />
            </div>
          </div>
        </Container>
      </main>
      <FooterLoading />
    </>
  );
}
