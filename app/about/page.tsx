import { useContext } from "react";
import Subhead from "@/app/Subhead";

export default function Page() {
  return (
    <>
      <p>About Page</p>
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
          an online fundraising platform
        </p>
      </Subhead>
    </>
  );
}
