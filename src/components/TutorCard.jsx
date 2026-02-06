function TutorCard({ tutor }) {
  return (
    <div className="card">
      <h3>{tutor.name}</h3>
      <p>Subject: {tutor.subject}</p>
      <p>Level: {tutor.level}</p>
      <p>City: {tutor.city}</p>
    </div>
  );
}

export default TutorCard;
