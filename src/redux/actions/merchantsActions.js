// ** START search Merchant Search Data
export const searchMearchant = params => {
  return { type: 'SEARCH_MERCHANT_DATA' }
}

// ** GET search Merchant Search Data
export const getSearchReasults = (data) => {
    return dispatch =>{
        dispatch({
            type: 'RECEIVED_MERCHANT_DATA',
            data
        })
    }
}

// ** OPEN Merchant Search Modal
export const openMearchantSearchModal = () => {
  return { type: 'SEARCH_MERCHANT_MODAL_OPEN'}
}

// ** CLOSE Merchant Search Modal
export const closeMearchantSearchModal = () => {
    return { type: 'SEARCH_MERCHANT_MODAL_CLOSE'}
}

// ** SOA Results Data
export const getSoaReasults = (data) => {
  return dispatch =>{
      dispatch({
          type: 'RECEIVED_SOA_DATA',
          data
      })
  }
}
