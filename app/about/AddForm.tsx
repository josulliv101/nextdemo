"use client";

import {
  experimental_useOptimistic as useOptimistic,
  useState,
  useRef,
} from "react";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";

import SubmitButton from "./SubmitButton";

const initialState = {
  message: "",
  sending: false,
};

export function AddForm({ createCampaign }: { createCampaign: any }) {
  const refEl = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(createCampaign, initialState);
  // const [optimisticMessage, addOptimisticMessage] = useOptimistic(
  //   initialState,
  //   (optimisticState, newMessage: string) => ({
  //     message: newMessage,
  //     sending: true,
  //   })
  // );
  // const handleSubmit = (fd: FormData) => {
  //   formAction();
  //   refEl.current?.reset();
  // };

  console.log("add form state", state);
  return (
    <form ref={refEl} action={formAction}>
      <label htmlFor="todo">Enter Task</label>
      <input type="text" id="beneficiary" name="beneficiary" required />
      <SubmitButton />
      <p aria-live="polite" className="sr-only__" role="status">
        {state?.message}
      </p>
    </form>
  );
}
