import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Education(){
    const [schoolName, setSchoolName] = useState("University A");
    const [eduDate, setEduDate] = useState("01/01/1970 - 01/01/2024");
    const [eduDesc, setEduDesc] = useState(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
      Duis semper ex et ornare lobortis.\
      Cras aliquet orci nec diam tempus, a feugiat sem convallis.\
      Pellentesque congue sem nec congue ultricies.\
      Nam vehicula nisl ut dictum fringilla."
    );
  
      return {id:uuidv4(),schoolName, setSchoolName, eduDate, setEduDate, eduDesc, setEduDesc}
  
}