function CourseCard({ course }) {
  return (
    <div>
      <h3>{course.name}</h3>
      <p>Category: {course.category}</p>
      <p>Status: {course.status}</p>
    </div>
  );
}

export default CourseCard;