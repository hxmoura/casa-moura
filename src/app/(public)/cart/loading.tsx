import Container from "@/components/Container";
import CheckoutContainer from "@/components/CheckoutContainer";
import HeaderFullLoading from "@/components/Header/HeaderFullLoading";
import Skeleton from "@/components/Skeleton";
import Footer from "@/components/Footer";

export default function Loading() {
  return (
    <div className="flex flex-col bg-background-light lg:bg-transparent min-h-screen">
      <HeaderFullLoading />
      <main className="mb-3 lg:my-12 flex-1">
        <Container noPadding>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-6">
            <div className="w-full">
              <CheckoutContainer>
                <div className="flex">
                  <Skeleton className="min-w-[76px] min-h-[76px] mr-3 rounded" />
                  <div className="w-full space-y-2">
                    <Skeleton className="max-w-72 w-full h-4 rounded" />
                    <Skeleton className="w-20 h-4 rounded" />
                    <Skeleton className="w-20 h-7 rounded" />
                  </div>
                  <Skeleton className="min-w-7 min-h-7 max-h-7 max-w-7 ml-4 rounded" />
                </div>
              </CheckoutContainer>
            </div>

            <div className="w-full lg:max-w-[424px] flex flex-col-reverse lg:flex-col gap-3 lg:gap-6 sticky top-5 h-min">
              <CheckoutContainer>
                <div className="flex flex-col gap-7">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Skeleton className="rounded h-4 w-32" />
                      <Skeleton className="rounded h-4 w-20" />
                    </div>
                    <div className="flex justify-between">
                      <Skeleton className="rounded h-4 w-32" />
                      <Skeleton className="rounded h-4 w-20" />
                    </div>
                    <div className="flex justify-between">
                      <Skeleton className="rounded h-4 w-32" />
                      <Skeleton className="rounded h-4 w-20" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <Skeleton className="rounded h-6 w-16" />
                    <div className="flex flex-col items-end gap-2">
                      <Skeleton className="rounded h-6 w-28" />
                      <Skeleton className="rounded h-4 w-32" />
                    </div>
                  </div>
                  <Skeleton className="rounded w-full h-10" />
                </div>
              </CheckoutContainer>

              <CheckoutContainer>
                <Skeleton className="rounded w-20 h-5 mb-3" />
                <div className="flex gap-3 mb-2">
                  <Skeleton className="rounded w-full h-10" />
                  <Skeleton className="rounded w-20 h-10" />
                </div>
                <div className="flex gap-1">
                  <Skeleton className="rounded w-24 h-3" />
                  <Skeleton className="rounded w-3 h-3" />
                </div>
              </CheckoutContainer>
            </div>
          </div>
        </Container>
      </main>
      <Footer type="short" />
    </div>
  );
}
