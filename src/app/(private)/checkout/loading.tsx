import CheckoutContainer from "@/components/CheckoutContainer";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-svh bg-background-light lg:bg-transparent">
      <Header type="short" />
      <main className="flex-1 lg:my-20">
        <Container noPadding>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-6">
            <div className="w-full flex flex-col gap-3 lg:gap-6">
              <CheckoutContainer>
                <div className="flex gap-2 items-center">
                  <Skeleton className="w-6 h-6 lg:w-7 lg:h-7 rounded-full" />
                  <Skeleton className="w-32 lg:w-44 h-4 lg:h-7 rounded" />
                </div>
                <div className="mt-7 mb-9 flex flex-col lg:flex-row gap-6">
                  <div className="w-full space-y-6">
                    <div className="space-y-2">
                      <Skeleton className="rounded w-12 h-4" />
                      <Skeleton className="rounded w-full h-10" />
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="rounded w-12 h-4" />
                      <Skeleton className="rounded w-full h-10" />
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="rounded w-12 h-4" />
                      <Skeleton className="rounded w-full h-10" />
                    </div>
                  </div>
                  <div className="w-full space-y-6">
                    <div className="space-y-2">
                      <Skeleton className="rounded w-12 h-4" />
                      <Skeleton className="rounded w-full h-10" />
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="rounded w-12 h-4" />
                      <Skeleton className="rounded w-full h-10" />
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="rounded w-12 h-4" />
                      <Skeleton className="rounded w-full h-10" />
                    </div>
                  </div>
                </div>
                <Skeleton className="rounded w-full h-10" />
              </CheckoutContainer>
              <CheckoutContainer>
                <div className="flex gap-2 items-center mb-7">
                  <Skeleton className="w-6 h-6 lg:w-7 lg:h-7 rounded-full" />
                  <Skeleton className="w-32 lg:w-44 h-4 lg:h-7 rounded" />
                </div>
                <Skeleton className="max-w-[500px] w-full h-4 rounded" />
              </CheckoutContainer>
            </div>
            <div className="w-full lg:min-w-[424px] lg:max-w-[424px]">
              {/* <CheckoutContainer>
                <div className="flex flex-col gap-7">
                  <div className="flex gap-2 items-center">
                    <Skeleton className="w-7 h-7 rounded" />
                    <Skeleton className="w-44 h-7 rounded" />
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-center">
                      <Skeleton className="min-w-14 min-h-14 rounded mr-3" />
                      <div className="w-full">
                        <Skeleton
                          className="max-w-44 w-full h-4 rounded mb-1"
                          repetitions={2}
                        />
                      </div>
                      <Skeleton className="w-16 h-4 rounded ml-4" />
                    </div>
                    <div className="flex items-center">
                      <Skeleton className="min-w-14 min-h-14 rounded mr-3" />
                      <div className="w-full">
                        <Skeleton
                          className="max-w-44 w-full h-4 rounded mb-1"
                          repetitions={2}
                        />
                      </div>
                      <Skeleton className="w-16 h-4 rounded ml-4" />
                    </div>
                    <div className="flex items-center">
                      <Skeleton className="min-w-14 min-h-14 rounded mr-3" />
                      <div className="w-full">
                        <Skeleton
                          className="max-w-44 w-full h-4 rounded mb-1"
                          repetitions={2}
                        />
                      </div>
                      <Skeleton className="w-16 h-4 rounded ml-4" />
                    </div>
                  </div>
                  <div className="border-b border-dashed border-background-softLight"></div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center mb-2">
                      <Skeleton className="w-7 h-7 rounded" />
                      <Skeleton className="w-44 h-7 rounded" />
                    </div>
                    <Skeleton className="w-16 h-4 rounded" />
                  </div>
                  <div className="border-b border-dashed border-background-softLight"></div>
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
              </CheckoutContainer> */}
            </div>
          </div>
        </Container>
      </main>
      <Footer type="short" />
    </div>
  );
}
