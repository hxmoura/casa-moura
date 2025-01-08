import Container from "../Container";
import Skeleton from "../Skeleton";

export default function FooterLoading() {
  return (
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
                <Skeleton className="rounded-full w-11 h-11" repetitions={4} />
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
  );
}
