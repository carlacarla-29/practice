export default function Button({ label, onClick, }) {
  return (
    <button onClick={onClick} className="app-button">
        {label} </button>
  );
}
