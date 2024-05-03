import { v4 as uuidv4 } from 'uuid';

export default function createEducation(){
    const schoolName = "University A";
    const eduDate = "01/01/1970 - 01/01/2024";
    const eduDesc =  "Description"
    
  
      return {id:uuidv4(),schoolName, eduDate, eduDesc}
  
}