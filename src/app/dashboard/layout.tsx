import NavBarDashbardComponent from "@/components/pages/NavBar/NavBarDashboard";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`antialiased`}>
        <div className="fixed">
          <NavBarDashbardComponent />
        </div>
        <div className="ml-96 overflow-y-auto">{children}</div>
      </body>
    </html>
  );
}
