export default function CustomLaneHeader({ day, date }) {
  return (
    <div>
      <header className="custom-header">
        {day} {date}
      </header>
    </div>
  );
}
