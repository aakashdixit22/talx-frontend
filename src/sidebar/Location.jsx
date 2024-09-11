import React from 'react'
import InputField from '../components/InputField'


const Location = ({handleChange,handleClick}) => {
  const [location, setLocation] = React.useState('')
  

  return (
    <div>
        <h4 className='text-lg  font-semibold mb-2'>Location</h4>

        <div>
            <InputField handleChange={handleChange} value="" title="All" name="text"/>

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