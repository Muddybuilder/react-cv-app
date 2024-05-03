import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Company() {
  const [companyName, setcompanyName] = useState("Company");
  const [jobTitle, setjobTitle] = useState("Lunch thief");
  const [companyDate, setcompanyDate] = useState("01/01/2024 - 01/04/2024");
  const [companyDesc, setcompanyDesc] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
      Duis semper ex et ornare lobortis.\
      Cras aliquet orci nec diam tempus, a feugiat sem convallis.\
      Pellentesque congue sem nec congue ultricies.\
      Nam vehicula nisl ut dictum fringilla."
  );

  return {
    id: uuidv4(),
    companyName,
    jobTitle,
    companyDate,
    companyDesc,
    setcompanyName,
    setjobTitle,
    setcompanyDate,
    setcompanyDesc,
  };
}
