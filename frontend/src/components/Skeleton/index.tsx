type CardProps = {
  className: string;
  repetitions?: number;
};

export default function Card({ className, repetitions = 1 }: CardProps) {
  return (
    <>
      {Array.from({ length: repetitions }, (_, index) => (
        <div
          key={index}
          className={`bg-background-softLight animate-pulse ${className || ''}`}
        ></div>
      ))}
    </>
  );
}
