import AcmeLogo from "@/app/ui/acme-logo";
import { lusitana, sriracha } from "@/app/ui/fonts";
import Link from "next/link";
import Image from "next/image";
import Subhead from "@/app/Subhead";
import { adminDb } from "@/app/lib/data";

export default async function Page() {
  const citiesRef = adminDb.collection("campaigns");
  const snapshot = await citiesRef.get();

  const campaigns: Array<any> = [];

  snapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
    return campaigns.push(doc.data());
  });
  return (
    <>
      <p>
        Our mission is to inspire giving and help good causes raise
        funds/in-kind donations.
      </p>

      <p>Pigpile: {campaigns.length}</p>
      {campaigns.map((c) => (
        <Link key={c.id} href={`/dashboard/pigpile/${c.id}`}>
          <div>
            <p className="foo">
              <strong>{c.id}</strong>
            </p>
            <p className="foo">{c.description}</p>
          </div>
        </Link>
      ))}
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
