import Container from "@/components/Container";
import FooterLoading from "@/components/Footer/FooterLoading";
import HeaderFullLoading from "@/components/Header/HeaderFullLoading";
import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <>
      <HeaderFullLoading />
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
      <FooterLoading />
    </>
  );
}
