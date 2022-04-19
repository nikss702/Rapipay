// ** React Imports
import { Fragment,useEffect,useState } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Bell, X, Check, AlertTriangle } from 'react-feather'
import {
  Button,
  Badge,
  Media,
  CustomInput,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'
import getNotifications from '@API/notification';
const NotificationDropdown = () => {
  // ** Notification Array
  const[notificationCount,setCount]=useState(0);
  const[notificationData,setNotification]=useState([]);
  useEffect(() => {
    // Update the document title using the browser API
        getNotifications().then((res)=>{
          try{
            setNotification(res.responseData);
            setCount(notificationData.length);
          }
          catch(error)
          {
            setNotification(null);
          }
          
      });
  },[]);

  const notificationsArray = [
    {
      img: require('@src/assets/images/portrait/small/avatar-s-15.jpg').default,
      description: 'Won the monthly best seller badge.',
      name: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>Congratulation Sam 🎉</span>winner!
        </Media>
      )
    },
    {
      img: require('@src/assets/images/portrait/small/avatar-s-3.jpg').default,
      description: 'You have 10 unread messages.',
      name: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>New message</span>&nbsp;received
        </Media>
      )
    },
    {
      avatarContent: 'MD',
      color: 'light-danger',
      description: 'MD Inc. order updated',
      name: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>Revised Order 👋</span>&nbsp;checkout
        </Media>
      )
    },
    // {
    //   name: <h6 className='font-weight-bolder mr-auto mb-0'>System Notifications</h6>,
    //   switch: <CustomInput type='switch' id='primary' name='primary' inline defaultChecked />
    // },
    {
      avatarIcon: <X size={14} />,
      color: 'light-danger',
      description: 'USA Server is down due to hight CPU usage',
      name: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>Server down</span>&nbsp;registered
        </Media>
      )
    },
    {
      avatarIcon: <Check size={14} />,
      color: 'light-success',
      description: 'Last month sales report generated',
      name: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>Sales report</span>&nbsp;generated
        </Media>
      )
    },
    {
      avatarIcon: <AlertTriangle size={14} />,
      color: 'light-warning',
      description: 'BLR Server using high memory',
      name: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>High memory</span>&nbsp;usage
        </Media>
      )
    }
  ]

  // ** Function to render Notifications
  /*eslint-disable */
  const renderNotificationItems = () => {
    return (
      <PerfectScrollbar
        component='li'
        className='media-list scrollable-container'
        options={{
          wheelPropagation: false
        }}
      >
        {notificationData.map((item, index) => {
          return (
            <a key={index} className='d-flex' href='/' onClick={e => e.preventDefault()}>
              <Media
                className={classnames('d-flex', {
                  'align-items-start': !item.switch,
                  'align-items-center': item.switch
                })}
              >
                {!item.switch ? (
                  <Fragment>
                    <Media left>
                      <Avatar
                        {...(item.img
                          ? { img: item.img, imgHeight: 32, imgWidth: 32 }
                          : item.avatarContent
                          ? {
                              content: item.avatarContent,
                              color: item.color
                            }
                          : item.avatarIcon
                          ? {
                              icon: item.avatarIcon,
                              color: item.color
                            }
                          : {
                            icon:  <Check size={14} />,
                            color: 'light-success'
                          })}
                      />
                    </Media>
                    <Media body>
                    <Media tag='p' heading>
                      <span className='font-weight-bolder'>{item.name}</span>&nbsp;received
                    </Media>
                      <small className='notification-text'>{item.description}</small>
                    </Media>
                  </Fragment>
                ) : (
                  <Fragment>
                    {item.name}
                    {item.switch}
                  </Fragment>
                )}
              </Media>
            </a>
          )
        })}
      </PerfectScrollbar>
    )
  }
  /*eslint-enable */
  return (
    <UncontrolledDropdown tag='li' className='dropdown-notification nav-item mr-25'>
      <DropdownToggle tag='a' className='nav-link' href='/' onClick={e => e.preventDefault()}>
        <Bell size={21} />
        <Badge pill color='danger' className='badge-up'>
          {notificationCount}
          
        </Badge>
      </DropdownToggle>
      <DropdownMenu tag='ul' right className='dropdown-menu-media mt-0'>
        <li className='dropdown-menu-header'>
          <DropdownItem className='d-flex' tag='div' header>
            <h4 className='notification-title mb-0 mr-auto'>Notifications</h4>
            <Badge tag='div' color='light-primary' pill>
            {notificationCount} New
            </Badge>
          </DropdownItem>
        </li>
        {renderNotificationItems()}
        <li className='dropdown-menu-footer'>
          <Button.Ripple color='primary' block>
            Read all notifications
          </Button.Ripple>
        </li>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default NotificationDropdown
