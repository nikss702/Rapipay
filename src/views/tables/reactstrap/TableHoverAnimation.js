import AvatarGroup from '@components/avatar-group'
import react from '@src/assets/images/icons/react.svg'
import vuejs from '@src/assets/images/icons/vuejs.svg'
import angular from '@src/assets/images/icons/angular.svg'
import bootstrap from '@src/assets/images/icons/bootstrap.svg'
import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import avatar3 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import { MoreVertical, Edit, Trash } from 'react-feather'
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const avatarGroupData1 = [
  {
    title: 'Yoshi',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Kevyn',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Louis',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData2 = [
  {
    title: 'Aileen',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Karleigh',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Elmo',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData3 = [
  {
    title: 'Blossom',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Jescie',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Gemma',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData4 = [
  {
    title: 'Thor',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Jack',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Reece',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const TableHoverAnimation = ({mdrData}) => {
  const mdrList = (mdrData ||[]).map(data =>
    <tr>
      <td>{data.cardType}</td>
      <td>{data.mdrPercent}</td>
    </tr>
  );


  return (
    <Table className='table-hover' responsive>
       <thead>
        <tr>
          <th>Card Type</th>
          <th>Percentage</th>
        </tr>
       
      </thead>
      <tbody>
      {mdrList}
      </tbody>
    </Table>
  )
}
export default TableHoverAnimation
