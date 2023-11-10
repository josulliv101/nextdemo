import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      type="submit"
      disabled={pending}
      style={{ opacity: pending ? 0.5 : 1 }}
    >
      Add
    </button>
  );
}
