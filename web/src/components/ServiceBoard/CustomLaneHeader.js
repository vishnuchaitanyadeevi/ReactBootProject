export default function CustomLaneHeader({ day, date }) {
  return (
    <div>
      <header
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          fontSize: '15px',
          fontWeight: 'bold',
          color: '#8e9488'
        }}
      >
        {day} {date}
      </header>
    </div>
  );
}
