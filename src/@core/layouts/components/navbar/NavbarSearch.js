// ** React Imports
import { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import { FormGroup, Label, Input, Row, Col, Form } from 'reactstrap'
import searchMerchant from '@API/merchants';

// ** Third Party Components
import axios from 'axios'
import classnames from 'classnames'
import * as Icon from 'react-feather'
import { NavItem, NavLink } from 'reactstrap'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { handleSearchQuery } from '@store/actions/navbar'
import { closeMearchantSearchModal, openMearchantSearchModal, searchMearchant, getSearchReasults } from '@store/actions/merchantsActions'

// ** Custom Components
import Autocomplete from '@components/autocomplete'

const NavbarSearch = () => {
  // ** Store Vars
  const dispatch = useDispatch()

  // ** States
  const [suggestions, setSuggestions] = useState([])
  const [navbarSearch, setNavbarSearch] = useState(false)

  // ** ComponentDidMount
  useEffect(() => {
    axios.get('/api/main-search/data').then(({ data }) => {
      setSuggestions(data.searchArr)
    })
  }, [])

  // ** Removes query in store
  const handleClearQueryInStore = () => dispatch(handleSearchQuery(''))

  // ** Function to handle external Input click
  const handleExternalClick = () => {
    if (navbarSearch === true) {
      setNavbarSearch(false)
      handleClearQueryInStore()
    }
  }

  // ** Function to clear input value
  const handleClearInput = setUserInput => {
    if (!navbarSearch) {
      setUserInput('')
      handleClearQueryInStore()
    }
  }

  // ** Function to close search on ESC & ENTER Click
  const onKeyDown = e => {
    if (e.keyCode === 27 || e.keyCode === 13) {
      setTimeout(() => {
        setNavbarSearch(false)
        handleClearQueryInStore()
      }, 1)
    }
  }

  // ** Function to handle search suggestion Click
  const handleSuggestionItemClick = () => {
    setNavbarSearch(false)
    handleClearQueryInStore()
  }

  // ** Function to handle search list Click
  const handleListItemClick = (func, link, e) => {
    func(link, e)
    setTimeout(() => {
      setNavbarSearch(false)
    }, 1)
    handleClearQueryInStore()
  }

  const {searchMerchModalStatus} = useSelector(state => state.merchantsStore)
  const [mobileNo, setMobileNo] = useState('')
  const [MID, setMID] = useState('')
  const [TID, setTID] = useState('')

  const submitForm = (e)=>{
    e.preventDefault();
    const payload = {
      mobileNo,
      mid: MID,
      tid: TID,
      "serviceType": "SEARCH_MERCHANT",
    }
    dispatch(searchMearchant());
    searchMerchant(payload).then((res)=>{
      try{
        dispatch(getSearchReasults(res));
      }catch(err){
        console.log(err)
      }
    });
  }

  return (
    <NavItem className='nav-search' onClick={() => setNavbarSearch(true)}>
      <NavLink className='nav-link-search' onClick={() => dispatch(openMearchantSearchModal())}>
        <Icon.Search className='ficon' />
      </NavLink>
      <div className='vertically-centered-modal'>
        <Modal isOpen={searchMerchModalStatus} toggle={() => dispatch(closeMearchantSearchModal())} className='modal-dialog-centered'>
          <ModalHeader toggle={() => dispatch(closeMearchantSearchModal())}>Search Mearchant</ModalHeader>
          <ModalBody>
            <Form>
              <Row>
                <Col sm='12'>
                  <FormGroup>
                    <Label for='MobileNumber'>Mobile Number</Label>
                    <Input type='text' id='mobile_id' placeholder='Enter Mobile Number' onChange={e=>setMobileNo(e.target.value)}/>
                  </FormGroup>
                </Col>
                <Col sm='12'>
                  <FormGroup>
                    <Label for='MID'>MID</Label>
                    <Input type='text' id='MID' placeholder='Enter MID' onChange={e=>setMID(e.target.value)}/>
                  </FormGroup>
                </Col>
                <Col sm='12'>
                  <FormGroup>
                    <Label for='TID'>TID</Label>
                    <Input type='text' id='TID' placeholder='Enter TID' onChange={e=>setTID(e.target.value)}/>
                  </FormGroup>
                </Col>
                <Col sm='12'>
                  <FormGroup className='d-flex mb-0'>
                    <Button.Ripple 
                      className='mr-1' 
                      color='primary' 
                      type='submit' 
                      onClick={submitForm}
                      disabled={!(mobileNo || MID || TID)}
                    >
                      Submit
                    </Button.Ripple>
                    <Button.Ripple outline color='secondary' type='reset'>
                      Reset
                    </Button.Ripple>
                  </FormGroup>
                </Col>

              </Row>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    </NavItem>
  )
}

export default NavbarSearch
