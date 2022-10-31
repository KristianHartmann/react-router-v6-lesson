import { getWorkshops } from "../api";

export default function Workshops() {
  const workshops = getWorkshops();
  return (
    <div className="container">
      <h1>Workshop Categories</h1>

      {workshops.map((workshops) => (
        <p key = {workshops.id}>{workshops.name}</p>
      ))}
    </div>
  );
}
