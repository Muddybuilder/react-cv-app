export default function InfoDialog({ isOpen, setIsOpen, information }) {
  let tmpName = information.userName;
  let tmpEmail = information.email;
  let tmpNumber = information.number;

  return (
    <dialog open={isOpen}>
      <div className="modal">
        <label>
          Name
          <input
            type="text"
            defaultValue={tmpName}
            onChange={(e) => {
              tmpName = e.target.value;
            }}
          ></input>
        </label>
        <label>
          Email
          <input
            type="email"
            defaultValue={tmpEmail}
            onChange={(e) => {
              tmpEmail = e.target.value;
            }}
          ></input>
        </label>
        <label>
          Phone Number
          <input
            type="text"
            defaultValue={tmpNumber}
            onChange={(e) => {
              tmpNumber = e.target.value;
            }}
          ></input>
        </label>
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
