"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

import Link from "next/link";
import { sriracha } from "@/app/ui/fonts";
import NavControls from "./NavControls";
import { ThemeContext } from "@/app/ThemeContext";

export default function ContentFrame({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [placement, setPlacement] = useState<"left" | "center" | "right">(
    "right"
  );
  const pathname = usePathname();
  return (
    <ThemeContext.Provider value={placement}>
      <div
        style={{
          zIndex: 9999,
          position: "fixed",
          top: pathname === "/" ? 0 : -8,
          left: placement !== "left" ? "32vw" : "62vw",
          transform: pathname === "/" ? "scale(.8)" : "scale(.6)",
          transition: "all 300ms ease-in-out",
        }}
      >
        <img src="/logo.png" width="84" height="84" alt="farm" />
        {/* <ArrowPathIcon className="h-24 w-24 text-white" /> */}
      </div>
      <div
        style={{
          // transition: "all 500ms ease-in 0s",
          transform: placement === "left" ? "scaleX(-1)" : "scaleX(1)",
          position: "absolute",
          top: 0,
          left: 0, // placement === "left" ? 300 : 0,
          // marginRight: "-200px",
          zIndex: 0,
          width: "100vw",
          height: "100vh",
          backgroundPosition: `${
            placement !== "left" ? "right" : "left"
          } bottom`,
          backgroundSize: "cover",
          backgroundImage:
            "linear-gradient(180deg,#4299e1,hsla(0,0%,48%,0.5)),url(/on-the-farm.png)",
        }}
      />{" "}
      <p
        style={{
          position: "relative",
          zIndex: 999,
          // transition: "all .5s ease-out",
          width: "max-content",
        }}
        className={`${sriracha.className} px-8 py-2 text-xl text-${
          placement !== "left" ? "white" : "blue-600"
        } md:text-2xl md:leading-normal`}
      >
        {" "}
        <Link href="/" className="">
          <span>Pigpile</span>
        </Link>
      </p>
      <div
        style={{
          position: "absolute",
          zIndex: 998,
          width: placement === "left" ? "30vw" : "30vw",
          height: `calc(100vh - ${placement === "left" ? 0 : 0}px)`,
          top: placement === "left" ? 0 : "0px",

          left: placement === "left" ? 0 : "100%",
          transform: `translateX(${placement === "left" ? 0 : "-100%"})`,
          // transition: "all .5s ease-in",
        }}
      >
        <div
          className="drop-shadow-lg"
          style={{ position: "relative", height: "100%" }}
        >
          {" "}
          {placement !== "left" && (
            <div
              style={{
                height: 64,
                width: "100%",
                backgroundColor: "#edeeee",
                position: "absolute",
                top: 0,
                borderTopLeftRadius: "12px",
              }}
            />
          )}
          <div
            style={{
              height: "100%",
              position: "relative",
              top: placement !== "left" ? 64 : 0,
              borderTopRightRadius: placement === "left" ? 12 : 0,
            }}
            className="w-full flex flex-col justify-start gap-6  bg-gray-50 px-6 py-10"
          >
            <NavControls active={placement} onChange={setPlacement} />
            foobar: {pathname}
            <br />
            {children}
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
