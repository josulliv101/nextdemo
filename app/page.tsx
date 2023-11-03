import AcmeLogo from "@/app/ui/acme-logo";
import { lusitana } from "@/app/ui/fonts";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main
      style={{
        backgroundImage:
          "linear-gradient(180deg,#4299e1,hsla(0,0%,48%,0.5)),url(/on-the-farm.png)",
      }}
      className="bg-cover bg-bottom  h-14  flex min-h-screen"
    >
      <div
        className="mt-10"
        style={{ position: "absolute", top: -30, right: 10 }}
      >
        <button
          type="button"
          className="mx-2 px-3 py-2 text-xs font-medium text-center text-white  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          About
        </button>
        <button
          type="button"
          className="px-3 py-2 text-xs font-medium text-center text-white  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      </div>
      <div className="mt-14 flex grow flex-col gap-4 md:flex-row-reverse">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Pigpile on good causes.</strong>
          </p>
          <p>an online fund-raising platform</p>

          <p>
            Our mission is to inspire giving and help good causes raise
            funds/in-kind donations.
          </p>

          <Link
            href="/dashboard/pigpile"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>View Pigpiles</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
