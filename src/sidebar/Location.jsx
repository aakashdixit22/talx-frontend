import React from 'react'
import InputField from '../components/InputField'


const Location = ({handleChange,handleClick}) => {
  return (
    <div>
        <h4 className='text-lg  font-semibold mb-2'>Location</h4>

        <div>
            <label className='flex sidebar-label-container'>
                <span className='checkmark'></span>
                <input type='radio' name="text" id="text" value="" onChange={handleChange}/>
                <span className='sidebar-label'>All</span>
            </label>

            <InputField handleChange={handleChange} value="london" title="London" name="text"/>
            <InputField handleChange={handleChange} value="seattle" title="Seattle" name="text"/>
            <InputField handleChange={handleChange} value="madrid" title="Madrid" name="text"/>
            <InputField handleChange={handleChange} value="london" title="London" name="text"/>
            <InputField handleChange={handleChange} value="boston" title="Boston" name="text"/>


        </div>
    </div>
  )
}

export default Location;