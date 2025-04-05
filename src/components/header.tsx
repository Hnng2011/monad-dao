"use client";

import { ConnectButton } from "./connect-button";
import Link from "next/link";

export function Header() {
  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl flex h-20 items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold text-white">
            <span className="text-purple-400">Monad</span>DAO
          </Link>
          <nav className="ml-8 hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/discover"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Discover
                </Link>
              </li>
              <li>
                <Link
                  href="/leaderboard"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link
                  href="/bridge"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Bridge
                </Link>
              </li>
              <li>
                <Link
                  href="/farms"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Farms
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <ConnectButton />
      </div>
    </header>
  );
}
