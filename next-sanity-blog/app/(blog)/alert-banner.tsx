// "use client";

import Link from "next/link";

// import { useRouter } from "next/navigation";
// import { useSyncExternalStore, useTransition } from "react";

// import { disableDraftMode } from "./actions";

// const emptySubscribe = () => () => {};

export default function AlertBanner() {
  // const router = useRouter();
  // const [pending, startTransition] = useTransition();

  // const shouldShow = useSyncExternalStore(
  //   emptySubscribe,
  //   () => window.top === window,
  //   () => false,
  // );

  // if (!shouldShow) return null;

  return (
    <div
      className='fixed top-0 left-0 z-50 w-full border-b bg-white/95 text-black backdrop-blur flex items-center justify-between px-4 h-16'
    >
      <div className="py-2 text-center text-sm">
        BLOGS
      </div>
      <nav className="flex space-x-9 text-sm font-bold">
        <Link href="/" className="hover:text-gray-700">Home</Link>
        <Link href="/about" className="hover:text-gray-700">About</Link>
        <Link href="/contact" className="hover:text-gray-700">Contact</Link>
      </nav>
    </div>
  );
}
