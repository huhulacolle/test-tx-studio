export default function CardWhite({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return <div className={`bg-white p-3 rounded-xl ${className}`}>{children}</div>;
}