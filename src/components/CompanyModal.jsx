import { useState } from "react";
import Company from "./Company";

function handleAdd(companyList, comp, setcompanyList) {
  const newList = companyList.concat(comp);

  setcompanyList(newList);
}

export default function CompanyDialog({
  isCompanyOpen,
  setIsCompanyOpen,
  companyList,
  setCompanyList,
}) {
  let comp = Company();

  return (
    <dialog open={isCompanyOpen}>
      <div className="modal">
        <label>
          Company Name
          <input
            type="text"
            defaultValue="Name"
            onChange={(e) => {
              comp.companyName = e.target.value;
            }}
          ></input>
        </label>
        <label>
          Job Title
          <input
            type="text"
            defaultValue="Job Title"
            onChange={(e) => {
              comp.jobTitle = e.target.value;
            }}
          ></input>
        </label>
        <label>
          Date
          <input
            type="text"
            defaultValue="MM/DD/YYYY - MM/DD/YYYY"
            onChange={(e) => {
              comp.companyDate = e.target.value;
            }}
          ></input>
        </label>
        <label>
          Description
          <input
            type="text"
            defaultValue="Job Description"
            onChange={(e) => {
              comp.companyDesc = e.target.value;
            }}
          ></input>
        </label>
      </div>

      <button
        onClick={() => {
          handleAdd(companyList, comp, setCompanyList);
          setIsCompanyOpen(false);
        }}
      >
        Add
      </button>
      <button onClick={() => setIsCompanyOpen(false)}>Cancel</button>
    </dialog>
  );
}
