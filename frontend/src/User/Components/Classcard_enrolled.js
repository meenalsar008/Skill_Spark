import React from 'react';
import "../../User/Components/Classcard_enrolled.css";

const Classcard_enrolled = ({ className, classStartDate, classEndDate, classRating }) => {
  return (
    <div className='classcard1'>
      <h3 className='className'>{className}</h3>
      <p className='classStart'>Start Date: {classStartDate}</p>
      <p className='classEnd'>End Date: {classEndDate}</p>
      <p className='classRate'>Rating: {classRating}/5</p>
    </div>
  );
};

export default Classcard_enrolled;
