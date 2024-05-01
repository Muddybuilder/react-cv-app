import { useState } from "react";
import "./App.css";
import "./Modal.css";
import "./InfoModal.css";

import CompanyDialog from "./CompanyModal";
import InfoDialog from "./InfoModal";
import SchoolDialog from "./Modal";

function App() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const [userName, setUserName] = useState("John Doe");
  const [email, setEmail] = useState("jdpower@gmail.com");
  const [number, setNumber] = useState("112-358-1321");

  const [schoolName, setSchoolName] = useState("University A");
  const [eduDate, setEduDate] = useState("01/01/1970 - 01/01/2024");
  const [eduDesc, setEduDesc] = useState(
    "Best University in the world, so I never left"
  );

  const [companyName, setCompanyName] = useState("Good Company");
  const [jobTitle, setJobTitle] = useState("Lunch stealer");
  const [companyDate, setCompanyDate] = useState("01/01/2024 - 01/14/2024");
  const [companyDesc, setcompanyDesc] = useState("Provides free lunch");
  const info = { userName, setUserName, email, setEmail, number, setNumber };
  const edu = {
    schoolName,
    setSchoolName,
    eduDate,
    setEduDate,
    eduDesc,
    setEduDesc,
  };
  const exp = {
    companyName,
    setCompanyName,
    companyDate,
    setCompanyDate,
    companyDesc,
    setcompanyDesc,
    jobTitle,
    setJobTitle,
  };
  return (
    <div className="body">
      <div className="side-bar">
        <div>
          <button
            onClick={() => {
              setIsInfoOpen(!isInfoOpen);
            }}
          >
            {isInfoOpen ? "Close" : "Edit Info"}
          </button>
          <InfoDialog
            isOpen={isInfoOpen}
            setIsOpen={setIsInfoOpen}
            information={info}
          />
        </div>
        <div>
          <button
            onClick={() => {
              setIsEducationOpen(!isEducationOpen);
            }}
          >
            {isEducationOpen ? "Close" : "Add Education"}
          </button>
          <SchoolDialog
            isEducationOpen={isEducationOpen}
            setIsEducationOpen={setIsEducationOpen}
            education={edu}
          />
        </div>
        <div>
          <button
            onClick={() => {
              setIsCompanyOpen(!isCompanyOpen);
            }}
          >
            {isCompanyOpen ? "Close" : "Add Experience"}
          </button>
        </div>
        <CompanyDialog
          isCompanyOpen={isCompanyOpen}
          setIsCompanyOpen={setIsCompanyOpen}
          experience={exp}
        />
      </div>
      <div className="main">
        <h1>Resume builder v1</h1>
        <hr></hr>
        
        <div className="info">
          <h3>Peronal Information</h3>
          <p>{userName}</p>
          <p>{email}</p>
          <p>{number}</p>
        </div>
        <div className="edu-container">
          <h3>Education</h3>
          <p>{schoolName}</p>
          <p>{eduDate}</p>
          <p>{eduDesc}</p>
        </div>
        <div className="exp-container">
          <h3>Experience</h3>
          <p>{companyName}</p>
          <p>{jobTitle}</p>
          <p>{companyDate}</p>
          <p>{companyDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
