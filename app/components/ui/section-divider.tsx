interface Props {
  title: string;
}

export default function SectionDivider({ title }: Props) {
  return (
    <div className="w-full flex items-center gap-4">
      <div
        className="flex-1 h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--accent-color))" }}
      />
      <h2 className="section-title">{title}</h2>
      <div
        className="flex-1 h-px"
        style={{ background: "linear-gradient(to left, transparent, var(--accent-color))" }}
      />
    </div>
  );
}
