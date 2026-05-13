import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-20 md:pt-32">
      {children}
    </div>
  );
}
