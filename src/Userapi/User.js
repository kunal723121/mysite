import { useEffect ,useState} from "react"
import Userlist from "./Userlist"
import Userdetails from "./Userdetails"
import Axios from "axios"
let User=()=>
{
    let[data,updata]=useState([])
   useEffect(()=>
   {
    Axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>
    {
        updata(response.data)
    }).catch();
   })
   let[obj,upobj]=useState({})
   let details=(l)=>
   {
    upobj(l);
   }
    return <div>
        
        <div className="bg-image">
        {/* <h1>{JSON.stringify(data)}</h1> */}
        <div className="   text-white container">
            <div className="row">
                <div className="col-8">
                <Userlist p1={data} p2={details}/>
                </div>
                <div className="col-4">{
                    
                Object.keys(obj).length>0 ? <>
                    <Userdetails prop={obj}/>
                    </>:null}
                </div>
            </div>
        </div>
        </div>
    </div>
}

export default User