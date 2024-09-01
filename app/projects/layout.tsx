export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl from-[#000033] via-[#301934] to-[#0e3d31] ">
			{children}
		</div>
	);
}
