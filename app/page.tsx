"use client";

import Navbar from "@/components/Navbar";
import ResizablePanel from "@/components/ResizablePanel";

export default function Home() {
  return (
    <div className="h-[calc(100vh-68px)]">
      <Navbar />
      <ResizablePanel />
    </div>
  );
}
