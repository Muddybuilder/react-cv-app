export default function InfoDialog({ isOpen, setIsOpen, information }) {
  let tmpName = information.userName;
  let tmpEmail = information.email;
  let tmpNumber = information.number;

  return (
    <dialog open={isOpen}>
      <div className="info-modal">
        <label htmlFor="myName">Name</label>
        <input
          name="myName"
          id="myName"
          type="text"
          defaultValue={tmpName}
          onChange={(e) => {
            tmpName = e.target.value;
          }}
        ></input>
        <label htmlFor="myEmail">Email</label>
        <input
          name="myEmail"
          id="myEmail"
          type="email"
          defaultValue={tmpEmail}
          onChange={(e) => {
            tmpEmail = e.target.value;
          }}
        ></input>
        <label htmlFor="myNumber">Phone Number</label>
        <input
          name="myNumber"
          id="myNumber"
          type="text"
          defaultValue={tmpNumber}
          onChange={(e) => {
            tmpNumber = e.target.value;
          }}
        ></input>
      </div>

      <button
        onClick={() => {
          information.setUserName(tmpName);
          information.setEmail(tmpEmail);
          information.setNumber(tmpNumber);
          setIsOpen(false);
        }}
      >
        Edit
      </button>
      <button onClick={() => setIsOpen(false)}>Cancel</button>
    </dialog>
  );
}
