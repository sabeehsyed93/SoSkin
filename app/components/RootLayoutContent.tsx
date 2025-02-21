'use client';

import { usePathname } from 'next/navigation';
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingOrbs from "./FloatingOrbs";

export default function RootLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* FloatingOrbs will be rendered on all pages except /book */}
      {pathname !== '/book' && (
        <div className="fixed inset-0 overflow-hidden -z-10">
          <FloatingOrbs />
        </div>
      )}
      <div className="relative z-20">
        <Navbar />
        <main className="relative z-20">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
