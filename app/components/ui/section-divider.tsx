interface Props {
  title: string;
}

export default function SectionDivider({ title }: Props) {
  return (
    <div className="w-full flex items-center gap-4">
      <div
        className="section-line-left h-px flex-1"
      />
      <h2 className="section-title">{title}</h2>
      <div
        className="section-line-right h-px flex-1"
      />
    </div>
  );
}
