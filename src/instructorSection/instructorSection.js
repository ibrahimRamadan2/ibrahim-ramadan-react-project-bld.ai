import React from "react";
import Instructor from "../instructor/Instructor";
function InstructorSection({ data }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <div>
        <h3 style={{ fontWeight: "bold" }}>Instructors</h3>
      </div>
      {/* here you should map all instructors from : courseData.visible_instructors */}
      {data.map((instructor, index) => (
        <Instructor key={index} data={instructor} />
      ))}
    </div>
  );
}

export default InstructorSection;
