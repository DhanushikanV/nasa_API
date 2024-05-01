import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = (props) => (
  <div style={{ textAlign: 'center', paddingTop: '60px', color: 'white' }}>
    <h1 style={{ textAlign: 'center', marginTop: '5%' , color: 'white'}}>Let view the Event of the Day</h1>

    <DatePicker
      wrapperClassName="date-picker"
      className="form-control text-black focus:outline-none"
      selected={props.date}
      onChange={props.changeDate}
      style={{ marginRight: '10px' }} // Add space between the DatePicker input and the search button
    />
    
    <button style={{ marginTop: '1em', fontSize: '1.2em', borderRadius: '10px', backgroundColor: 'lightBlue', padding: '8px 16px', border: 'none', cursor: 'pointer' }} onClick={props.search}>Search</button>
  </div>
);

export default DateInput;
