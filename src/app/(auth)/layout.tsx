export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-bl  from-[#1F4247] to-[#09141A] h-screen">
      <div>{children}</div>
    </div>
  );
}
