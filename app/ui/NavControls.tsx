import type { Dispatch, SetStateAction } from "react";

export default function NavControls({
  active,
  onChange,
}: {
  active: "left" | "center" | "right";
  onChange: Dispatch<SetStateAction<"left" | "center" | "right">>;
}) {
  return (
    <div style={{ position: "absolute", top: 10, right: 10 }}>
      <div className="pointer-events-auto flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10">
        <button
          style={{ opacity: active === "left" ? 1 : 0.5 }}
          onClick={() => onChange("left")}
          className="px-4 py-2 hover:bg-slate-50 hover:text-slate-900"
        >
          L
        </button>
        <button
          style={{ opacity: active === "center" ? 1 : 0.5 }}
          onClick={() => onChange("center")}
          className="px-4 py-2 hover:bg-slate-50 hover:text-slate-900"
        >
          C
        </button>
        <button
          style={{ opacity: active === "right" ? 1 : 0.5 }}
          onClick={() => onChange("right")}
          className="px-4 py-2 hover:bg-slate-50 hover:text-slate-900"
        >
          R
        </button>
      </div>
    </div>
  );
}
