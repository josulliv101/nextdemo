import { useContext } from "react";
import Subhead from "@/app/Subhead";

export default function Page() {
  return (
    <>
      <p>About Page</p>
      <Subhead>
        <p
          style={{
            fontSize: 64,
            marginBottom: 12,
          }}
        ></p>
        <p
          style={{
            fontSize: 24,
          }}
        ></p>
      </Subhead>
    </>
  );
}
