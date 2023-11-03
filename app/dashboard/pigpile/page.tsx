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
    <main
      style={{
        backgroundImage:
          "linear-gradient(180deg,#4299e1,hsla(0,0%,48%,0.5)),url(/on-the-farm.png)",
      }}
      className="bg-cover bg-bottom  h-14  flex min-h-screen"
    >
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row-reverse">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p>Pigpile: {campaigns.length}</p>
          {campaigns.map((c) => (
            <Link key={c.id} href={`/dashboard/pigpile/${c.id}`}>
              <p className="foo">{c.id}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
