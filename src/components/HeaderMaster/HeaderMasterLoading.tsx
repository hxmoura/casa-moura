"use client";

import Container from "../Container";
import Logo from "../Logo";
import Skeleton from "../Skeleton";

export default function HeaderMasterLoading() {
  return (
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
  );
}
