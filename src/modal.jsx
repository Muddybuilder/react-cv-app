export default function SchoolDialog({
  isEducationOpen,
  setIsEducationOpen,
  education
}) {
  let tmpSchool = education.schoolName;
  let tmpDate = education.eduDate;
  let tmpDesc = education.eduDesc;

  return (
    <dialog open={isEducationOpen}>
      <div className="modal">
        <label htmlFor="mySchool">School Name</label>
        <input
          name="mySchool"
          id="mySchool"
          type="text"
          defaultValue={tmpSchool}
          onChange={(e) => {
            tmpSchool = e.target.value;
          }}
        ></input>
        <label htmlFor="myDate">Date</label>
        <input
          name="myDate"
          id="myDate"
          type="text"
          defaultValue={tmpDate}
          onChange={(e) => {
            tmpDate = e.target.value;
          }}
        ></input>
        <label htmlFor="myDesc">Description</label>
        <input
          name="myDesc"
          id="myDesc"
          type="text"
          defaultValue={tmpDesc}
          onChange={(e) => {
            tmpDesc = e.target.value;
          }}
        ></input>
      </div>

      <button
        onClick={() => {
          education.setSchoolName(tmpSchool);
          education.setEduDate(tmpDate);
          education.setEduDesc(tmpDesc);
          setIsEducationOpen(false);
        }}
      >
        Edit
      </button>
      <button onClick={() => setIsEducationOpen(false)}>Cancel</button>
    </dialog>
  );
}
