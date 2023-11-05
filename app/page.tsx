import AcmeLogo from "@/app/ui/acme-logo";
import { lusitana, sriracha } from "@/app/ui/fonts";
import Link from "next/link";
import Image from "next/image";
import Subhead from "@/app/Subhead";

export default function Page() {
  return (
    <>
      <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
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
      <Subhead>
        <br />
        <br />
        <p
          style={{
            fontSize: 40,
            marginBottom: 12,
          }}
        >
          Pigpile on good causes.
        </p>
        <p
          style={{
            fontSize: 24,
          }}
        >
          an online fundraising platform
        </p>
      </Subhead>
    </>
  );
}
