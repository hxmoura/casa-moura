import Container from "@/components/Container";
import FooterLoading from "@/components/Footer/FooterLoading";
import HeaderMasterLoading from "@/components/HeaderMaster/HeaderMasterLoading";
import Skeleton from "@/components/Skeleton";

export default function loading() {
  return (
    <>
      <HeaderMasterLoading />
      <main className="mb-24">
        <Container>
          <div className="flex justify-between items-center mt-6 lg:mt-16">
            <Skeleton className="rounded-md h-4 lg:h-6 max-w-72 w-full mr-5" />
            <Skeleton className="rounded-md h-7 max-w-16 w-full lg:hidden" />
          </div>
          <div className="flex mt-12 gap-6">
            <section className="min-w-[312px] hidden lg:block">
              <div className="flex justify-between items-center">
                <Skeleton className="rounded-md w-20 h-5" repetitions={2} />
              </div>
              <div>
                <Skeleton className="w-full rounded-md h-80 mt-5" />
                <Skeleton className="w-full rounded-md h-36 mt-6" />
              </div>
            </section>
            <section className="flex justify-center lg:justify-start flex-wrap gap-5 w-full">
              <Skeleton
                className="rounded-md w-full md:w-[220px] h-[400px]"
                repetitions={20}
              />
            </section>
          </div>
        </Container>
      </main>
      <FooterLoading />
    </>
  );
}
