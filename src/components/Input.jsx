export default function Input({ type, holder, refs }) {
  return (
    <>
      <input
        type={type ? type : "text"}
        ref={refs}
        required
        placeholder={holder ? holder : "Please enter text"}
        className="input input-bordered w-full mt-3 max-w-xs"
      />
    </>
  );
}
