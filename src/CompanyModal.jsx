export default function CompanyDialog(
    { isCompanyOpen, setIsCompanyOpen, experience }
    
  ) {
    let tmpCompanyName = experience.companyName;
    let tmpJobTitle = experience.jobTitle;
    let tmpDate = experience.companyDate;
    let tmpDesc = experience.companyDesc;
  
    return (
      <dialog open={isCompanyOpen}>
        <div className="modal">
          <label htmlFor="myCompany">Company Name</label>
          <input
            name="myCompany"
            id="myCompany"
            type="text"
            defaultValue={tmpCompanyName}
            onChange={(e) => {
                tmpCompanyName = e.target.value;
            }}
          ></input>
          <label htmlFor="myJobTitle">Job Title</label>
          <input
            name="myJobTitle"
            id="myJobTitle"
            type="text"
            defaultValue={tmpJobTitle}
            onChange={(e) => {
                tmpJobTitle = e.target.value;
            }}
          ></input>
          <label htmlFor="myDate">Date</label>
          <input
            name="myDate"
            id="myDate"
            type="text"
            defaultValue={tmpDate}
            onChange={(e) => {
              tmpDate = e.target.value;
            }}
          ></input>
          <label htmlFor="myDesc">Description</label>
          <input
            name="myDesc"
            id="myDesc"
            type="text"
            defaultValue={tmpDesc}
            onChange={(e) => {
              tmpDesc = e.target.value;
            }}
          ></input>
        </div>
  
        <button
          onClick={() => {
            experience.setCompanyName(tmpCompanyName);
            experience.setJobTitle(tmpJobTitle);
            experience.setCompanyDate(tmpDate);
            experience.setcompanyDesc(tmpDesc);
            setIsCompanyOpen(false);
          }}
        >
          Edit
        </button>
        <button onClick={() => setIsCompanyOpen(false)}>Cancel</button>
      </dialog>
    );
  }
  