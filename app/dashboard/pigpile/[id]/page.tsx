import { adminDb } from "@/app/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const ref = adminDb.collection("campaigns").doc(id);
  const doc = await ref.get();
  const data = !doc.exists ? null : doc.data();
  return (
    <div>
      {!data && <p>{id} not found.</p>}
      {data && (
        <>
          <h2>
            <strong>{data.campaign?.title}</strong>
          </h2>
          <br />
          <p>{data.beneficiary}</p>
          <br />
          <p>{data.campaign?.descr}</p>
          <br />
          <p>{data.media?.image}</p>
        </>
      )}
    </div>
  );
}
