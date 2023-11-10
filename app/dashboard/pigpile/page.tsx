import Link from "next/link";
import { usePathname } from "next/navigation";
import getAdminDb from "@/app/lib/getAdminDb";

export default async function Page() {
  const adminDb = await getAdminDb();
  const citiesRef = adminDb.collection("campaigns");
  const snapshot = await citiesRef.get();

  const campaigns: Array<any> = [];

  snapshot.forEach((doc: any) => {
    console.log(doc.id, "=>", doc.data());
    return campaigns.push(doc.data());
  });
  return (
    <>
      <p>Pigpile: {campaigns.length}</p>
      {campaigns.map((c) => (
        <Link key={c.id} href={`/dashboard/pigpile/${c.id}`}>
          <p className="foo">{c.id}</p>
        </Link>
      ))}
    </>
  );
}
