export default function InterestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-bl from from-[#1F4247] to-[#09141A] h-screen">
      <div>{children}</div>
    </div>
  );
}
