import { Suspense } from "react";
import Image from "next/image";
import { adminDb } from "@/app/lib/data";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const refCampaign = adminDb.collection("campaigns").doc(id);
  const doc = await refCampaign.get();
  const data = !doc.exists ? null : doc.data();
  return {
    title: data?.beneficiary,
  };
}

async function Donations({ id }: { id: string }) {
  const donationsRef = adminDb
    .collection("campaigns")
    .doc(id)
    .collection("donations");
  const snapshot = await donationsRef.get();

  const donations: Array<any> = [];

  snapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
    return donations.push(doc.data());
  });
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <h2>
        <strong>Donations</strong>
      </h2>
      {!donations.length && <p>No donations yet.</p>}

      {donations.map((c) => (
        <p className="sm:block md:block">{c.quantity || c.amount}</p>
      ))}
    </div>
  );
}

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const refCampaign = adminDb.collection("campaigns").doc(id);
  const doc = await refCampaign.get();
  const data = !doc.exists ? null : doc.data();

  return (
    <div>
      <Image
        src="/on-the-farm.png"
        width={1200}
        height={700}
        className=""
        alt="Screenshots of the dashboard project showing desktop and mobile versions"
      />
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
          <br />
          <hr />
          <br />
          <Suspense fallback={<div>loading...</div>}>
            <Donations id={id} />
          </Suspense>
        </>
      )}
    </div>
  );
}
