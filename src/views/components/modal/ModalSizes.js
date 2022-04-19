import { Fragment, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import TableHoverAnimation from '../../tables/reactstrap/TableHoverAnimation'


const ModalSizes = ({data,keys}) => {
  const ModalConfig = data;
  const i=keys;
  const [modal, setModal] = useState(null)

  const toggleModal = id => {
    if (modal !== id) {
      setModal(id)
    } else {
      setModal(null)
    }
  }

  // const renderModal = ModalConfig.map((item,i) => {
  //   return (
  //     <Fragment key={i}>
  //       <div>
  //         <Button.Ripple color='primary' className="btn-primary btn-sm" onClick={() => toggleModal(i)} key={'view'} outline>
  //           View
  //         </Button.Ripple>
  //       </div>
  //       <Modal
  //         isOpen={modal === i}
  //         toggle={() => toggleModal(i)}
  //         className={`modal-dialog-centered `}
  //         key={i}
  //       >
  //         <ModalHeader toggle={() => toggleModal(i)}>
  //           TID Data
  //         </ModalHeader>
  //         <ModalBody>
  //         <TableHoverAnimation mdrData={data[i]} />
  //         </ModalBody>
  //         {/* <ModalFooter>
  //           <Button color='primary' onClick={() => toggleModal(i)} outline>
  //             Accept
  //           </Button>
  //         </ModalFooter> */}
  //       </Modal>
  //     </Fragment>
  //   )
  // })

  return(<div className='demo-inline-spacing'>
    <Fragment key={i}>
        <div>
          <Button.Ripple color='primary' className="btn-primary btn-sm" onClick={() => toggleModal(i)} key={'view'} outline>
            View
          </Button.Ripple>
        </div>
        <Modal
          isOpen={modal === i}
          toggle={() => toggleModal(i)}
          className={`modal-dialog-centered `}
          key={i}
        >
          <ModalHeader toggle={() => toggleModal(i)}>
            TID Data
          </ModalHeader>
          <ModalBody>
          <TableHoverAnimation mdrData={data[i]} />
          </ModalBody>
          {/* <ModalFooter>
            <Button color='primary' onClick={() => toggleModal(i)} outline>
              Accept
            </Button>
          </ModalFooter> */}
        </Modal>
      </Fragment></div>)
}
export default ModalSizes
