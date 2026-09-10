import CourseCard from './CourseCard.jsx';

const courses = [
  { id: 1, name: 'React Basics', category: 'Frontend', status: 'Active' },
  { id: 2, name: 'Node.js API', category: 'Backend', status: 'Active' },
  { id: 3, name: 'Python for ML', category: 'Data Science', status: 'Upcoming' },
  { id: 4, name: 'UI/UX Design', category: 'Design', status: 'Active' },
];

function CourseList() {
  if (courses.length === 0) {
    return <p>No courses found.</p>;
  }

  return (
    <div>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
        />
      ))}
    </div>
  );
}

export default CourseList;