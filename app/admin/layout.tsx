import React from "react";
import AdminNav from "./admin-nav";

export const metadata = {
  title: "Owner Control Panel | Maseeek",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent/30">
      <AdminNav />
      <main className="flex-1 pb-16">{children}</main>
    </div>
  );
}
