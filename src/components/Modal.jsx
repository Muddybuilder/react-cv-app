import createEducation from "./Education";

function handleAdd(eduList, edu, setEduList) {
  const newList = eduList.concat(edu);

  setEduList(newList);
}

export default function SchoolDialog({
  isEducationOpen,
  setIsEducationOpen,
  eduList,
  setEduList,
}) {
  let edu = createEducation();

  return (
    <dialog open={isEducationOpen}>
      <div className="modal">
        <label >
          School Name
          <input
            type="text"
            defaultValue="Name"
            onChange={(e) => {
              edu.schoolName = e.target.value;
            }}
          ></input>
        </label>
        <label >
          Date
          <input
            type="text"
            defaultValue=" MM/DD/YYYY - MM/DD/YYYY"
            onChange={(e) => {
              edu.eduDate = e.target.value;
            }}
          ></input>
        </label>
        <label >
          Description
          <input
            type="text"
            defaultValue="Description"
            onChange={(e) => {
              edu.eduDesc = e.target.value;
            }}
          ></input>
        </label>
      </div>

      <button
        onClick={() => {
          handleAdd(eduList, edu, setEduList);
          setIsEducationOpen(false);
        }}
      >
        Add
      </button>
      <button onClick={() => setIsEducationOpen(false)}>Cancel</button>
    </dialog>
  );
}
