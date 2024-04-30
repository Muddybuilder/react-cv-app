import { useState } from "react";
import "./App.css";
import "./Modal.css";
import "./InfoModal.css"

import InfoDialog from "./InfoModal";
import Dialog from "./Modal";

function App() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isEducationOpen, setisEducationOpen] = useState(false);
  const [userName, setUserName] = useState("John Doe");
  const [email, setEmail] = useState("jdpower@gmail.com");
  const [number, setNumber] = useState("112-358-1321");

  return (
    <>
      <div>
        <button
          onClick={() => {
            setIsInfoOpen(!isInfoOpen);
          }}
        >
          {isInfoOpen ? "Close" : "Edit Info"}
        </button>
        <>
          {isInfoOpen &&
            InfoDialog(
              { isOpen: isInfoOpen, setIsOpen: setIsInfoOpen },
              { userName, setUserName },
              { email, setEmail },
              { number, setNumber }
            )}
        </>
      </div>
      <div>
        <button
          onClick={() => {
            setisEducationOpen(!isEducationOpen);
          }}
        >
          {isEducationOpen ? "Close" : "Add Education"}
        </button>
        <>
          {isEducationOpen &&
            Dialog(
              { isOpen: isEducationOpen, setIsOpen: setisEducationOpen },
              { userName, setUserName },
              { email, setEmail },
              { number, setNumber }
            )}
        </>
      </div>
    </>
  );
}

export default App;
