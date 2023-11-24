import Container from '@/components/Container';
import Logo from '@/components/Logo';
import Skeleton from '@/components/Skeleton';

export default function Loading() {
  return (
    <>
      {/* Header */}
      <header>
        <section className="bg-brand-primaryDark lg:bg-brand-primary h-[150px] lg:h-[90px] py-4">
          <Container>
            <div className="flex justify-between items-start lg:items-center relative h-full">
              <div className="lg:hidden">
                <Skeleton className="w-[30px] h-[30px] md:h-10 md:w-10 rounded-md" />
              </div>
              <div className="absolute lg:static left-12 md:left-1/2 md:-translate-x-1/2 lg:-translate-x-0">
                <Logo />
              </div>
              <div className="w-full absolute bottom-0 lg:static lg:mx-16">
                <Skeleton className="w-full h-[45px] rounded-md" />
              </div>
              <div className="flex gap-[10px] md:gap-[15px] lg:gap-5">
                <Skeleton
                  className="w-[30px] h-[30px] md:w-10 md:h-10 lg:w-[87px] lg:h-[35px] rounded-md"
                  repetitions={2}
                />
              </div>
            </div>
          </Container>
        </section>
        <section className="bg-brand-primaryDark h-[60px] hidden lg:block">
          <Container>
            <div className="flex items-center gap-7 h-full">
              <Skeleton className="w-[137px] h-6 rounded-md" />
              <Skeleton className="w-[70px] h-6 rounded-md" repetitions={3} />
            </div>
          </Container>
        </section>
      </header>
      <main>
        {/* Carousel */}
        <Container noPadding>
          <div className="mb-20 lg:mt-12">
            <Skeleton className="w-full h-[300px] md:h-[400px] lg:rounded-md" />
          </div>
        </Container>

        {/* Informations */}
        <Container>
          <div className="overflow-hidden">
            <ul className="flex justify-center gap-[100px]">
              <li className="flex items-center gap-5">
                <Skeleton className="w-[50px] h-[50px] rounded-md" />
                <div>
                  <Skeleton className="w-[128px] h-[22px] rounded-md mb-[5px]" />
                  <Skeleton className="w-[128px] h-[16px] rounded-md" />
                </div>
              </li>
              <li className="flex items-center gap-5">
                <Skeleton className="w-[50px] h-[50px] rounded-md" />
                <div>
                  <Skeleton className="w-[128px] h-[22px] rounded-md mb-[5px]" />
                  <Skeleton className="w-[128px] h-[16px] rounded-md" />
                </div>
              </li>
              <li className="flex items-center gap-5">
                <Skeleton className="w-[50px] h-[50px] rounded-md" />
                <div>
                  <Skeleton className="w-[128px] h-[22px] rounded-md mb-[5px]" />
                  <Skeleton className="w-[128px] h-[16px] rounded-md" />
                </div>
              </li>
              <li className="flex items-center gap-5">
                <Skeleton className="w-[50px] h-[50px] rounded-md" />
                <div>
                  <Skeleton className="w-[128px] h-[22px] rounded-md mb-[5px]" />
                  <Skeleton className="w-[128px] h-[16px] rounded-md" />
                </div>
              </li>
            </ul>

            {/* Departaments */}
            <section className="mt-20">
              <Skeleton className="w-[284px] h-6 rounded-md mb-[30px]" />
              <div className="flex gap-6">
                <Skeleton
                  className="w-32 h-32 rounded-md flex-shrink-0"
                  repetitions={9}
                />
              </div>
            </section>

            {/* Promotions */}
            <section className="mt-20">
              <Skeleton className="w-[284px] h-6 rounded-md mb-[30px]" />
              <div className="flex gap-6">
                <Skeleton
                  className="w-[200px] h-[316px] rounded-md flex-shrink-0"
                  repetitions={6}
                />
              </div>
            </section>

            {/* Highlights */}
            <section className="mt-20">
              <Skeleton className="w-[284px] h-6 rounded-md mb-[30px]" />
              <div className="flex gap-6">
                <Skeleton
                  className="w-[200px] h-[316px] rounded-md flex-shrink-0"
                  repetitions={6}
                />
              </div>
            </section>

            {/* Blog */}
            <section className="mt-20">
              <Skeleton className="w-[284px] h-6 rounded-md mb-[30px]" />
              <div className="flex gap-6">
                <Skeleton
                  className="w-[312px] h-[330px] rounded-md flex-shrink-0"
                  repetitions={4}
                />
              </div>
            </section>

            {/* See too */}
            <section className="mt-20">
              <Skeleton className="w-[284px] h-6 rounded-md mb-[30px]" />
              <div className="flex gap-6">
                <Skeleton
                  className="w-[200px] h-[316px] rounded-md flex-shrink-0"
                  repetitions={6}
                />
              </div>
            </section>
          </div>
        </Container>
      </main>

      {/* Footer */}
      <footer className="bg-background-light border-t-2 border-background-softLight mt-20 py-8">
        <Container>
          <div className="flex flex-wrap md:justify-center gap-12 md:gap-24">
            <div>
              <Skeleton className="w-40 h-6 rounded-md mb-1" />
              <Skeleton className="w-[191px] h-6 rounded-md" />
              <Skeleton className="w-[250px] h-11 rounded-md mt-[10px]" />
            </div>
            <div>
              <Skeleton className="w-[191px] h-6 rounded-md mb-4" />
              <div className="flex gap-[10px] max-w-[230px] flex-wrap">
                <Skeleton
                  className="w-[70px] h-10 rounded-md flex-shrink-0"
                  repetitions={5}
                />
              </div>
            </div>
            <div>
              <Skeleton className="w-[191px] h-6 rounded-md mb-4" />
              <Skeleton className="w-[46px] h-6 rounded-md mb-1" />
              <Skeleton className="w-[150px] h-4 rounded-md mb-2" />
              <Skeleton className="w-[46px] h-6 rounded-md mb-1" />
              <Skeleton
                className="w-[150px] h-4 rounded-md mb-1"
                repetitions={3}
              />
            </div>
            <div>
              <Skeleton className="w-[191px] h-6 rounded-md mb-4" />
              <Skeleton
                className="w-[150px] h-4 rounded-md mb-2"
                repetitions={5}
              />
            </div>
          </div>
          <p className="text-sm text-center my-8">
            © 2023 Casa Moura - Todos os direitos reservados
          </p>
        </Container>
      </footer>
    </>
  );
}
