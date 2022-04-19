import { Fragment, useState } from 'react'
import { Label } from 'reactstrap'
import Flatpickr from 'react-flatpickr'

const PickerDefault = ({title}) => {
  const [picker, setPicker] = useState(new Date())
  return (
    <Fragment>
      <Label for='default-picker'>{title?title:"Default"}</Label>
      <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' />
    </Fragment>
  )
}

export default PickerDefault
