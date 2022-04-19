const initialState = {
    searchMerchModalStatus: false,
    loading: true,
    mdrData: {},
    monthData: {},
    monthlyData: {},
    onHoldTxn: {},
    profileData: {},
    todayData: {},
    transactionVia: {},
    txnLimit: {}
}

const merchantsReducers = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case 'SEARCH_MERCHANT_MODAL_OPEN':
            console.log(action);
            return { ...state, searchMerchModalStatus: true }
        case 'SEARCH_MERCHANT_MODAL_CLOSE':
            console.log(action);
            return { ...state, searchMerchModalStatus: false }
        case 'SEARCH_MERCHANT_DATA':
            console.log(action);
            return { ...state, loading: true }
        case 'RECEIVED_SOA_DATA':
            console.log(action);
            return { ...state, loading: true }
        case 'RECEIVED_MERCHANT_DATA':
            console.log(action);
            const { mdrData, monthData, monthlyData, onHoldTxn, profileData, todayData, transactionVia, txnLimit} = action.data.responseData
            newState = {
                mdrData,
                monthData,
                monthlyData,
                onHoldTxn,
                profileData,
                todayData,
                transactionVia,
                txnLimit
            }
            return {
                loading: false,
                searchMerchModalStatus: false,
                ...newState
            }
        default:
            return state
    }
}

export default merchantsReducers
