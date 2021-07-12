import React from 'react';
import { phone_number_info } from '../../constants/constant';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'


const CountryInfo = () => {
  return (
    <PhoneInput
      isValid={(value, country) => {
        phone_number_info.country = country;
        phone_number_info.value = value;
        // console.log('phone_number_info', phone_number_info);
          return true;
      }}
      inputProps={{
        name: 'phone',
        required: true,
        max: 4,
        disabled: true
      }}
      country={'gb'}
    />
  )
}

export default CountryInfo;