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
    title: 'Griffith',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Hu',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Felicia',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData2 = [
  {
    title: 'Quinlan',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Patrick',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Castor',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData3 = [
  {
    title: 'Mohammad',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Isabella',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Michael',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData4 = [
  {
    title: 'Lavinia',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Nelle',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Virginia',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const TableHover = () => {
  return (
    <Table hover responsive>
      <thead>
        <tr>
          <th>S. NO</th>
          <th>Ticket No</th>
          <th>Date</th>
          <th>Attended By</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            1
          </td>
          <td>100001</td>
          <td>
           6-09-2021
          </td>
          <td>
          test
          </td>
          <td>
            <Badge pill color='light-primary' className='mr-1'>
              Open
            </Badge>
          </td>
          </tr>
          <tr>
          <td>
            2
          </td>
          <td>100002</td>
          <td>
           6-09-2021
          </td>
          <td>
          test
          </td>
          <td>
            <Badge pill color='light-danger' className='mr-1'>
              Closed
            </Badge>
          </td>
         
        </tr> 
        <tr>
          <td>
            3
          </td>
          <td>100003</td>
          <td>
           6-09-2021
          </td>
          <td>
          test
          </td>
          <td>
            <Badge pill color='light-danger' className='mr-1'>
              Closed
            </Badge>
          </td>
         
        </tr> 
        <tr>
          <td>
            4
          </td>
          <td>100004</td>
          <td>
           6-09-2021
          </td>
          <td>
          test
          </td>
          <td>
            <Badge pill color='light-primary' className='mr-1'>
              Open
            </Badge>
          </td>
         
        </tr> 
        <tr>
          <td>
            5
          </td>
          <td>100005</td>
          <td>
           6-09-2021
          </td>
          <td>
          test
          </td>
          <td>
            <Badge pill color='light-danger' className='mr-1'>
              Closed
            </Badge>
          </td>
         
        </tr> 
        <tr>
          <td>
            6
          </td>
          <td>100006</td>
          <td>
           6-09-2021
          </td>
          <td>
          test
          </td>
          <td>
            <Badge pill color='light-danger' className='mr-1'>
              Closed
            </Badge>
          </td>
         
        </tr>   
        <tr>
          <td>
            7
          </td>
          <td>100007</td>
          <td>
           6-09-2021
          </td>
          <td>
          test
          </td>
          <td>
            <Badge pill color='light-primary' className='mr-1'>
              Open
            </Badge>
          </td>
         
        </tr>   
        <tr>
          <td>
            8
          </td>
          <td>100008</td>
          <td>
           6-09-2021
          </td>
          <td>
          test
          </td>
          <td>
          <Badge pill color='light-primary' className='mr-1'>
              Open
            </Badge>
          </td>
         
        </tr>   
        </tbody>
    </Table>
  )
}

export default TableHover
