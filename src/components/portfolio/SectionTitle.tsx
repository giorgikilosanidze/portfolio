type Props = { children: React.ReactNode };

export default function SectionTitle({ children }: Props) {
  return (
    <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-accent">
      {children}
    </h2>
  );
}
