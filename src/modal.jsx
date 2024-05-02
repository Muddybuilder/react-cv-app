import Education from "./Education"

function handleAdd(eduList, edu, setEduList) {
  const newList = eduList.concat( edu );

  setEduList(newList);
}

export default function SchoolDialog({
  isEducationOpen,
  setIsEducationOpen,
  eduList,
  setEduList
}) {
  let edu = Education();

  return (
    <dialog open={isEducationOpen}>
      <div className="modal">
        <label htmlFor="mySchool">School Name</label>
        <input
          name="mySchool"
          id="mySchool"
          type="text"
          defaultValue={edu.schoolName}
          onChange={(e) => {
            edu.schoolName = e.target.value;
          }}
        ></input>
        <label htmlFor="myDate">Date</label>
        <input
          name="myDate"
          id="myDate"
          type="text"
          defaultValue={edu.eduDate}
          onChange={(e) => {
            edu.eduDate = e.target.value;
          }}
        ></input>
        <label htmlFor="myDesc">Description</label>
        <input
          name="myDesc"
          id="myDesc"
          type="text"
          defaultValue={edu.eduDesc}
          onChange={(e) => {
            edu.eduDesc = e.target.value;
          }}
        ></input>
      </div>

      <button
        onClick={() => {
          handleAdd(eduList, edu, setEduList)
          setIsEducationOpen(false);
        }}
      >
        Add
      </button>
      <button onClick={() => setIsEducationOpen(false)}>Cancel</button>
    </dialog>
  );
}
