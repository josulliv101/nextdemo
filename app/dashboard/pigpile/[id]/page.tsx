import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { adminDb } from "@/app/lib/data";
import { Metadata, ResolvingMetadata } from "next";
import Subhead from "@/app/Subhead";
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
  const tags: Array<string> = data?.tags || [];
  return (
    <>
      <div>
        <Image
          src="/lewis-shc-playbtn.png"
          width={630}
          height={354}
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
            <p>{data.campaign?.shortdescr}</p>
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
      </div>{" "}
      <Subhead>
        <br />
        <br />
        <p
          style={{
            fontSize: 40,
            marginBottom: 12,
          }}
        >
          {data?.beneficiary}
        </p>
        <p
          style={{
            fontSize: 24,
          }}
        >
          {data?.campaign?.title}
        </p>{" "}
        <div style={{ display: "flex", marginTop: 32 }}>
          {" "}
          <Link href={`/dashboard/pigpile/${id}`}>
            <span
              style={{}}
              // onClick={() => console.log("left")}
              className="mx-2 px-4 py-2 bg-slate-500  hover:bg-slate-50 hover:text-slate-900"
            >
              Donate 1 pair
            </span>
          </Link>
          <Link href={`/dashboard`}>
            <span
              // style={{ opacity: active === "center" ? 1 : 0.5 }}
              // onClick={() => console.log("center")}
              className="mx-2 px-4 py-2 bg-slate-500 hover:bg-slate-50 hover:text-slate-900"
            >
              Donate 5 pair
            </span>
          </Link>
          <Link href={`/dashboard`}>
            <span
              //  style={{ opacity: active === "right" ? 1 : 0.5 }}
              // onClick={() => console.log("right")}
              className="mx-2 px-4 py-2 bg-slate-500 hover:bg-slate-50 hover:text-slate-900"
            >
              Donate 10 pair
            </span>
          </Link>
        </div>
        <p
          style={{
            color: "white",
            position: "absolute",
            top: -72,
            right: -180,
          }}
        >
          {tags.map((tag) => (
            <span style={{ paddingRight: 12 }}>#{tag}</span>
          ))}
        </p>
      </Subhead>
    </>
  );
}
