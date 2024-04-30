export default function Dialog(
  { isOpen, setIsOpen },
  { schoolName, setSchoolName },
  { date, setDate },
  { description, setDescription }
) {
  let tmpSchool = schoolName;
  let tmpDate = date;
  let tmpDesc = description;

  return (
    <dialog open={isOpen}>
      <div className="modal">
        <label htmlFor="mySchool">School Name</label>
        <input
          name="mySchool"
          id="mySchool"
          type="text"
          defaultValue={schoolName}
          onChange={(e) => {
            tmpSchool = e.target.value;
          }}
        ></input>
        <label htmlFor="myDate">Date</label>
        <input
          name="myDate"
          id="myDate"
          type="text"
          defaultValue={date}
          onChange={(e) => {
            tmpDate = e.target.value;
          }}
        ></input>
        <label htmlFor="myDesc">Description</label>
        <input
          name="myDesc"
          id="myDesc"
          type="text"
          defaultValue={description}
          onChange={(e) => {
            tmpDesc = e.target.value;
          }}
        ></input>
      </div>

      <button
        onClick={() => {
          setSchoolName(tmpSchool);
          setDate(tmpDate);
          setDescription(tmpDesc);
          setIsOpen(false);
        }}
      >
        Edit
      </button>
      <button onClick={() => setIsOpen(false)}>Cancel</button>
    </dialog>
  );
}
