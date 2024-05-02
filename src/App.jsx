import { useState } from "react";
import "./App.css";
import "./Modal.css";
import "./InfoModal.css";

import Education from "./Education";
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

  const [eduList, setEduList] = useState([Education()]);
  // const [companyList, setCompanyList] = useState([]);
  const [companyName, setCompanyName] = useState("Good Company");
  const [jobTitle, setJobTitle] = useState("Lunch thief");
  const [companyDate, setCompanyDate] = useState("01/01/2024 - 01/14/2024");
  const [companyDesc, setcompanyDesc] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
  Duis semper ex et ornare lobortis.\
  Cras aliquet orci nec diam tempus, a feugiat sem convallis.\
  Pellentesque congue sem nec congue ultricies.\
  Nam vehicula nisl ut dictum fringilla."
  );
  const info = { userName, setUserName, email, setEmail, number, setNumber };

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
  console.log(eduList);
  const eduCard = eduList.map((item) => {
    return (
      <div className="edu-card" key={item.id}>
        <p>{item.schoolName}</p>
        <p>{item.eduDate}</p>
        <p>{item.eduDesc}</p>
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
          {eduCard}
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
