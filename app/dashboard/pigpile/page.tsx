import Link from "next/link";
import { usePathname } from "next/navigation";
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
    <main>
      <p>Pigpile: {campaigns.length}</p>
      {campaigns.map((c) => (
        <Link key={c.id} href={`/dashboard/pigpile/${c.id}`}>
          <p className="hidden md:block">{c.id}</p>
        </Link>
      ))}
    </main>
  );
}
