import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';




const SearchRow = () => {
    const [selectedDateFrom, setSelectedDateFrom] = useState(new Date())
    const [selectedDateUntil, setSelectedDateUntil] = useState(new Date())
    

    return (
        <div className='search-row'>
            
            <div className='where'>
                <div>Where</div>
                <div className='where-div' aria-autocomplete='off'><input className='where-input' type="text" placeholder='Enter city airport or address' />
                </div>
            </div>
            <div className='from'>
                <span>From</span>
                <div className='from-pickers'>

                    <ReactDatePicker
                        selected={selectedDateFrom}
                        onChange={(date) => setSelectedDateFrom(date)}
                        toggleCalendarOnIconClick className='date-picker' />
                    <TimePicker showSecond={false } defaultValue={moment()}/>

                </div>
            </div>
            <div className='until'>
                <span>Until</span>
                <div className='until-pickers'>

                    <ReactDatePicker
                        selected={selectedDateUntil}
                        
                        onChange={(date) => setSelectedDateUntil(date)}
                        toggleCalendarOnIconClick className='date-picker' />
                    <TimePicker showSecond={false } defaultValue={moment()}/>
                </div>
            </div>
            <div className='search-button'><button className='search'></button></div>
        </div>
    );
}

export default SearchRow;
