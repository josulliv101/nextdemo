import { createCampaign } from "@/app/lib/actions";
import Subhead from "@/app/Subhead";
import { AddForm } from "./AddForm";

export default function Page() {
  return (
    <>
      <p>About Page</p>
      <div>
        <AddForm createCampaign={createCampaign} />
      </div>
      <Subhead>
        <br />
        <br />
        <p
          style={{
            fontSize: 40,
            marginBottom: 12,
          }}
        >
          About
        </p>
        <p
          style={{
            fontSize: 24,
          }}
        >
          Thanks for checking out the site
        </p>
      </Subhead>
    </>
  );
}
