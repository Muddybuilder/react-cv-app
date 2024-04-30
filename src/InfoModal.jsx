
export default function InfoDialog({isOpen, setIsOpen},{userName, setUserName},{email,setEmail},{number,setNumber}) {
  let tmpName=userName;
  let tmpEmail=email;
  let tmpNumber=number;

  return (
    <dialog open={isOpen}>
      <div className="info-modal">
        <label htmlFor="myName">Name</label>
        <input name="myName" id="myName" type="text" defaultValue={userName} onChange={(e)=>{tmpName=e.target.value}}></input>
        <label htmlFor="myEmail">Email</label>
        <input name="myEmail" id="myEmail" type="email" defaultValue={email} onChange={(e)=>{tmpEmail=e.target.value}}></input>
        <label htmlFor="myNumber">Phone Number</label>
        <input name="myNumber" id="myNumber" type="text" defaultValue={number} onChange={(e)=>{tmpNumber=e.target.value}}></input>
      </div>

        <button onClick={() => {
          setUserName(tmpName);
          setEmail(tmpEmail);
          setNumber(tmpNumber);
          setIsOpen(false);
          }}>Edit</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button> 
    </dialog>
  )
}