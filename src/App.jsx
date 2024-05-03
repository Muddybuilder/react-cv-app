import { useState } from "react";
import "./components/Modal.css";
import "./components/InfoModal.css";
import "./App.css"

import createEducation from "./components/Education";
import Company from "./components/Company";
import InfoDialog from "./components/InfoModal";
import SchoolDialog from "./components/Modal";
import CompanyDialog from "./components/CompanyModal";

function App() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const [userName, setUserName] = useState("John Doe");
  const [email, setEmail] = useState("jdpower@gmail.com");
  const [number, setNumber] = useState("112-358-1321");

  const [eduList, setEduList] = useState([createEducation()]);
  const [companyList, setCompanyList] = useState([Company()]);

  const info = { userName, setUserName, email, setEmail, number, setNumber };

  const eduCard = eduList.map((item) => {
    return (
      <div className="edu-card" key={item.id}>
        <h4>{item.schoolName}</h4>
        <p>{item.eduDate}</p>
        <p>{item.eduDesc}</p>
        <button
          onClick={() => {
            setEduList(eduList.filter((elem) => elem.id !== item.id));
          }}
        >
          delete
        </button>
      </div>
    );
  });
  const companyCard = companyList.map((item) => {
    return (
      <div className="comp-card" key={item.id}>
        <h4>{item.companyName}</h4>
        <p>{item.jobTitle}</p>
        <p>{item.companyDate}</p>
        <p>{item.companyDesc}</p>
        <button
          onClick={() => {
            setCompanyList(companyList.filter((elem) => elem.id !== item.id));
          }}
        >
          delete
        </button>
      </div>
    );
  });

  return (
    <div className="body">
      <div className="side-bar">
        <div>
          <button
            onClick={() => {
              setIsInfoOpen(!isInfoOpen);
            }}
          >
            Edit Info
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
            Add Education
          </button>
          <SchoolDialog
            isEducationOpen={isEducationOpen}
            setIsEducationOpen={setIsEducationOpen}
            eduList={eduList}
            setEduList={setEduList}
          />
        </div>
        <div>
          <button
            onClick={() => {
              setIsCompanyOpen(!isCompanyOpen);
            }}
          >
            Add Experience
          </button>
        </div>
        <CompanyDialog
          isCompanyOpen={isCompanyOpen}
          setIsCompanyOpen={setIsCompanyOpen}
          companyList={companyList}
          setCompanyList={setCompanyList}
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
          {eduCard}
        </div>
        <div className="exp-container">
          <h3>Experience</h3>
          {companyCard}
        </div>
      </div>
    </div>
  );
}

export default App;
