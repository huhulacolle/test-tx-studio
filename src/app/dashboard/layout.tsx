import NavBarDashbardComponent from "@/components/pages/NavBar/NavBarDashboard";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="fixed">
        <NavBarDashbardComponent />
      </div>
      <div className="ml-16 md:ml-96 overflow-y-auto">{children}</div>
    </>
  );
}
