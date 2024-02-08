export default function Button({ value, fn }) {
  return (
    <button onClick={fn} className="btn btn-outline btn-warning mt-4 w-full">
      {value}
    </button>
  );
}
