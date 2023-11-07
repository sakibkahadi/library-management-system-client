import {  useState } from "react";
import ReactDatePicker from "react-datepicker";




const DatePicker = ({handleBorrow, quantity, userBooks }) => {
    
    
    const [selectLocalDate, setSelectedLocalDate] = useState(null)
    const [selectDate, setSelectedDate] = useState(null)
   
    return (

        <div>
            <form onSubmit={handleBorrow} >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-semibold">Current Date</span>
                    </label>
        
                    <div className="border-2 border-red-200 w-fit">

                        <ReactDatePicker name="localDate" selected={selectLocalDate} onChange={date => setSelectedLocalDate(date)}
                            dateFormat='dd/MM//yyyy'
                            
                            maxDate={new Date()}
                            minDate={new Date()}
                            filterDate={(date) => date.getDay !== 6 && date.getDay() !== 0}
                            required
                        />

                    </div>


                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-semibold">Return  Date</span>
                    </label>
        
                    <div className="border-2 border-red-200 w-fit">

                        <ReactDatePicker name="returnDate" selected={selectDate} onChange={date => setSelectedDate(date)}
                            dateFormat='dd/MM//yyyy'
                            
                            minDate={new Date()}
                            filterDate={(date) => date.getDay !== 6 && date.getDay() !== 0}
                            required
                        />

                    </div>

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-semibold">Quantity</span>
                    </label>
        
                    

                       <p>Books Quantity: {quantity}</p>

                    

                </div>
                 <button type="submit" className="btn mt-6 btn-success">Submit</button>
                
            </form>
        </div>

    );
};

export default DatePicker;