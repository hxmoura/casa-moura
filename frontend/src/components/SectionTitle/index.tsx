type SectionTitleProps = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return <h3 className="font-semibold text-xl">{children}</h3>;
}
