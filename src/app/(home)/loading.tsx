"use client";

import Container from "@/components/Container";
import Logo from "@/components/Logo";
import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <>
      <header className="bg-brand-primary h-[120px] lg:h-[150px]">
        <Container>
          <div className="py-4 lg:py-6 h-full flex flex-col gap-9">
            <div className="flex relative h-full lg:h-auto items-start justify-between lg:items-center">
              <div className="flex items-center gap-4">
                <Skeleton className="lg:hidden w-7 h-7 rounded-md" />
                <Logo />
              </div>
              <Skeleton className="w-full lg:h-11 h-10 rounded-md lg:mx-24 absolute bottom-0 lg:static" />
              <div className="flex gap-3 lg:gap-5">
                <Skeleton
                  className="w-7 h-7 lg:w-9 lg:h-9 rounded-md"
                  repetitions={3}
                />
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-10">
              <Skeleton className="w-36 h-6 rounded-md" />
              <Skeleton className="w-24 h-6 rounded-md" repetitions={5} />
            </div>
          </div>
        </Container>
      </header>
      <main>
        {/* Slider */}
        <Container noPadding>
          <div className="lg:mt-12">
            <Skeleton className="w-full h-[400px] lg:h-[350px] lg:rounded-xl" />
          </div>
        </Container>

        {/* Informations */}
        <Container>
          <div className="flex gap-24 lg:justify-center mt-16 overflow-hidden">
            <div className="flex items-center gap-5">
              <Skeleton className="w-12 h-12 rounded-md" />
              <div className="flex flex-col gap-1">
                <Skeleton className="w-28 h-5 rounded-md" />
                <Skeleton className="w-36 h-4 rounded-md" />
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Skeleton className="w-12 h-12 rounded-md" />
              <div className="flex flex-col gap-1">
                <Skeleton className="w-28 h-5 rounded-md" />
                <Skeleton className="w-36 h-4 rounded-md" />
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Skeleton className="w-12 h-12 rounded-md" />
              <div className="flex flex-col gap-1">
                <Skeleton className="w-28 h-5 rounded-md" />
                <Skeleton className="w-36 h-4 rounded-md" />
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Skeleton className="w-12 h-12 rounded-md" />
              <div className="flex flex-col gap-1">
                <Skeleton className="w-28 h-5 rounded-md" />
                <Skeleton className="w-36 h-4 rounded-md" />
              </div>
            </div>
          </div>
        </Container>

        {/* Departaments */}
        <Container>
          <div className="my-20 overflow-hidden">
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-64 rounded-md" />
              <div className="hidden lg:flex gap-2">
                <Skeleton className="w-7 h-7 rounded-full" repetitions={2} />
              </div>
            </div>
            <div className="flex gap-10 mt-7">
              <div className="flex flex-col justify-center gap-4">
                <Skeleton className="rounded-full w-20 h-20" />
                <Skeleton className="rounded-full w-20 h-5" />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <Skeleton className="rounded-full w-20 h-20" />
                <Skeleton className="rounded-full w-20 h-5" />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <Skeleton className="rounded-full w-20 h-20" />
                <Skeleton className="rounded-full w-20 h-5" />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <Skeleton className="rounded-full w-20 h-20" />
                <Skeleton className="rounded-full w-20 h-5" />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <Skeleton className="rounded-full w-20 h-20" />
                <Skeleton className="rounded-full w-20 h-5" />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <Skeleton className="rounded-full w-20 h-20" />
                <Skeleton className="rounded-full w-20 h-5" />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <Skeleton className="rounded-full w-20 h-20" />
                <Skeleton className="rounded-full w-20 h-5" />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <Skeleton className="rounded-full w-20 h-20" />
                <Skeleton className="rounded-full w-20 h-5" />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <Skeleton className="rounded-full w-20 h-20" />
                <Skeleton className="rounded-full w-20 h-5" />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <Skeleton className="rounded-full w-20 h-20" />
                <Skeleton className="rounded-full w-20 h-5" />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <Skeleton className="rounded-full w-20 h-20" />
                <Skeleton className="rounded-full w-20 h-5" />
              </div>
            </div>
          </div>
        </Container>

        {/* Promotions */}
        <Container>
          <div className="my-20 overflow-hidden">
            <Skeleton className="h-6 w-64 rounded-md" />
            <div className="flex gap-6 mt-7">
              <Skeleton
                className="min-w-[220px] h-[400px] rounded-lg"
                repetitions={6}
              />
            </div>
          </div>
        </Container>

        {/* Highlights */}
        <Container>
          <div className="my-20 overflow-hidden">
            <Skeleton className="h-6 w-64 rounded-md" />
            <div className="flex gap-6 mt-7">
              <Skeleton
                className="min-w-[220px] h-[400px] rounded-lg"
                repetitions={6}
              />
            </div>
          </div>
        </Container>

        {/* Blog */}
        <Container>
          <div className="my-20 overflow-hidden">
            <Skeleton className="h-6 w-64 rounded-md" />
            <div className="flex gap-6 mt-7">
              <Skeleton
                className="min-w-[312px] h-[330px] rounded-md"
                repetitions={6}
              />
            </div>
          </div>
        </Container>

        {/* Brands */}
        <Container>
          <div className="my-20 overflow-hidden">
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-64 rounded-md" />
              <div className="hidden lg:flex gap-2">
                <Skeleton className="w-7 h-7 rounded-full" repetitions={2} />
              </div>
            </div>
            <div className="flex gap-6 mt-7">
              <Skeleton className="rounded-lg min-w-32 h-32" repetitions={9} />
            </div>
          </div>
        </Container>

        {/* Coupons */}
        <Container>
          <div className="my-20 overflow-hidden">
            <Skeleton className="h-6 w-64 rounded-md" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-7">
              <Skeleton
                className="rounded-xl w-full h-[150px]"
                repetitions={4}
              />
            </div>
          </div>
        </Container>

        {/* SeeToo */}
        <Container>
          <div className="my-20 overflow-hidden">
            <Skeleton className="h-6 w-64 rounded-md" />
            <div className="flex gap-6 mt-7">
              <Skeleton
                className="min-w-[220px] h-[400px] rounded-lg"
                repetitions={6}
              />
            </div>
          </div>
        </Container>

        {/* Newsletter */}
        <div className="w-full min-h-[110px] bg-background-softDark">
          <Container>
            <div className="flex flex-wrap justify-around items-center py-7 gap-7">
              <div className="flex flex-col gap-2 items-center lg:items-start max-w-96 w-full">
                <Skeleton className="rounded-md h-7 w-full" />
                <Skeleton className="rounded-md h-5 w-full" />
              </div>
              <div className="flex flex-col md:flex-row max-w-[460px] w-full gap-3">
                <Skeleton className="w-full h-11 rounded-md" />
                <Skeleton className="w-full md:w-[150px] h-11 rounded-md" />
              </div>
            </div>
          </Container>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-background-light pt-7 lg:pt-14 pb-7">
        <Container>
          <div className="flex justify-around flex-wrap flex-col lg:flex-row gap-3 lg:gap-24">
            <div className="flex justify-between items-center lg:flex-col lg:items-start">
              <Skeleton className="h-7 w-32 rounded-md mb-5" />
              <Skeleton className="rounded-md h-7 w-7 lg:hidden" />
              <Skeleton
                className="h-5 w-40 rounded-md mb-3 hidden lg:flex"
                repetitions={5}
              />
            </div>
            <div className="flex justify-between items-center lg:flex-col lg:items-start">
              <Skeleton className="h-7 w-32 rounded-md mb-5" />
              <Skeleton className="rounded-md h-7 w-7 lg:hidden" />
              <Skeleton
                className="h-5 w-40 rounded-md mb-3 hidden lg:flex"
                repetitions={5}
              />
            </div>
            <div className="flex justify-between items-center lg:flex-col lg:items-start">
              <Skeleton className="h-7 w-32 rounded-md mb-5" />
              <Skeleton className="rounded-md h-7 w-7 lg:hidden" />
              <Skeleton
                className="h-5 w-40 rounded-md mb-3 hidden lg:flex"
                repetitions={5}
              />
            </div>
            <div className="flex flex-col gap-3 lg:gap-12">
              <div className="flex justify-between items-center lg:flex-col lg:items-start">
                <Skeleton className="h-7 w-32 rounded-md mb-5" />
                <Skeleton className="rounded-md h-7 w-7 lg:hidden" />
                <div className="gap-5 hidden lg:flex">
                  <Skeleton className="rounded-md w-9 h-6 " repetitions={6} />
                </div>
              </div>
              <div className="flex justify-between items-center lg:flex-col lg:items-start">
                <Skeleton className="h-7 w-32 rounded-md mb-5" />
                <Skeleton className="rounded-md h-7 w-7 lg:hidden" />
                <div className="gap-5 hidden lg:flex">
                  <Skeleton
                    className="rounded-full w-11 h-11"
                    repetitions={4}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-background-softLight h-[2px] w-full mb-7 mt-7 lg:mt-14"></div>
          <div className="flex flex-col items-center gap-3 lg:gap-2">
            <Skeleton className="w-full max-w-96 h-4 rounded-sm" />
            <Skeleton className="w-full max-w-[560px] h-4 rounded-sm" />
            <Skeleton className="w-full max-w-36 h-4 rounded-sm" />
          </div>
        </Container>
      </footer>
    </>
  );
}
