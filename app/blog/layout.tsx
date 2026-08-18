import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24 px-5 sm:px-8">
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  );
}
