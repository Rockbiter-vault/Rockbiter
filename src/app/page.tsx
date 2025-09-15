'use client';
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <div className="flex items-center flex-col">
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/images/unnamed1.png"
              alt="underconstruction"
              width={500}
              height={500}
              className="mask-gradient-radial"
            />

            <Image
              src="/images/unnamed3.png"
              alt="underconstruction"
              width={500}
              height={500}
              className="mask-gradient-edges"
            />
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center mt-8">
        <div className="flex items-center gap-2 text-zinc-500">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={180}
            height={38}
            priority
          />
          Rockbiter - 2025
        </div>
      </footer>

      <style jsx global>{`
        .mask-gradient-radial {
          mask: radial-gradient(circle, black 50%, transparent 100%);
          -webkit-mask: radial-gradient(circle, black 50%, transparent 100%);
        }

        .mask-gradient-edges {
          mask:
            linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
          -webkit-mask:
            linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
          mask-composite: intersect;
          -webkit-mask-composite: intersect;
        }
      `}</style>
    </div>
  );
}
