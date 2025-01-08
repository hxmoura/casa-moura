interface SkeletonProps {
  className: string;
  repetitions?: number;
}

export default function Skeleton({
  className,
  repetitions = 1,
}: SkeletonProps) {
  return (
    <>
      {Array.from({ length: repetitions }, (_, index) => (
        <div
          key={index}
          className={`bg-background-softLight animate-pulse ${className ?? ""}`}
        ></div>
      ))}
    </>
  );
}
