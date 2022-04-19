import { Card, CardBody } from 'reactstrap';
import { useSelector } from 'react-redux';


const TidDetails = () => {
  const tidData = useSelector(state => state.merchantsStore);

  const renderData = () => {

    var tid_lis = [];
    var tid_list = [];
    var tid = "";
    var mid = "";
    Object.entries(tidData).map((item, index) => {
      // console.log(item)
        if(item[0] == "mdrData" && Object.keys(item[1]).length){
     
            const itm_ls=(Object.values(item[1]))[0];
            const itm_ks=(Object.keys(item[1]));
            tid = itm_ks;
            // console.log(tid);
            
            // (itm_ls).map((item1, index1) => {
            //   tid_lis.push(<li className="text-primary mb-3"><strong>{item1.tid}</strong></li>)
            //   mid = item1.mid;
            // })

            (itm_ks).map((item1, index1) => {
              tid_list.push(<li className="text-primary mb-3"><strong>{item1}</strong></li>)
            })

        }
    }) 

    Object.entries(tidData).map((item, index) => {
      // console.log(item)
        if(item[0] == "mdrData" && Object.keys(item[1]).length){
     
            const itm_ls=(Object.values(item[1]))[0];

            (itm_ls).map((item1, index1) => {
              mid = item1.mid;
            })


        }
    }) 

    return(
      // <>
      // {tidData.length ?
      <>
        <h3 className="text-dark">Merchant Name</h3>
        <h3 className="text-dark mb-1">MID : {mid}</h3>
        <Card className='card-tid-details'>
        <CardBody>
          <h3>TID Details</h3>
          <div className="tid-listing pt-2">
              <ul className="list-unstyled px-2">
                  {/* {tid_lis} */}
                  {tid_list}
                  {/* <li className="text-primary mb-3"><strong>{tid}</strong></li> */}
              </ul>  
          </div>
        </CardBody>
      </Card>  
      </> 
      // :  <span>Do search using mobile no</span>}
      // </>            
    )



  }
    return (
            <>
              {renderData()}
              </>
         
    )
  }

  
  export default TidDetails
