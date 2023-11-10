import Link from "next/link";
import * as admin from "firebase-admin/firestore";
import { usePathname } from "next/navigation";
import { getFirebaseAdminApp } from "@/app/firebase";

export default async function Page() {
  const app = getFirebaseAdminApp();
  const adminDb = admin.getFirestore(app);
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
