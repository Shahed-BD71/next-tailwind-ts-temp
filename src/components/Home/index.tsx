import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main>
      <section className="bg-white">
        <div className="layout flex min-h-screen flex-col items-center justify-center text-center">
          <div>
            <Image
              src="/assets/images/hero.svg"
              height={500}
              width={500}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-3xl font-semibold mt-4 underline decoration-1 text-red-700">
              Next.js + Tailwind CSS + TypeScript Starter
            </h1>
            <p className="mt-2 text-base text-gray-800">
              A starter for Next.js, Tailwind CSS, and TypeScript
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
