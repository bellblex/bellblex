import React from "react";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}

export default function PageIntro({
  eyebrow,
  title,
  children,
  className = "",
  bodyClassName = "body-text",
}: PageIntroProps) {
  return (
    <div className={className}>
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h1 className="page-title">{title}</h1>
      <div className={`${bodyClassName} mt-5 max-w-3xl`}>{children}</div>
    </div>
  );
}
