import { useState } from "react"
import { Component } from "react"
// let Cal=()=>
// {
//     let[a,b]=useState({
//         w:0,
//         h:0,
//         age:0,
//         calorie:0,
//         bmr:0,
//     })
//     let update=(event)=>
//     {
//         console.log("update ==>",event);
//        b({...a,[event.target.name]:parseInt(event.target.value)})
//     }
//     let def=(event)=>{
//         event.preventDefault();
//         b({...a,calorie:((10*a.w)+(6.25*a.h)-(5*a.age)+5)*1.9,bmr:((10*a.w)+(6.25*a.h)-(5*a.age)+5)})
//         // b({...a,bmr:((10*a.w)+(6.25*a.h)+(5*a.age)+5)})
//     }
//     let[data,updata]=useState({
//         wage:0,
//         weight:0,
//         height:0,
//         wbmr:0,
//         wcal:0,
//     })
//     let hand=(event)=>
//     {
//         // console.log("update ==>",event);
//        updata({...data,[event.target.name]:parseInt(event.target.value)})
//     }
//     let upd=(event)=>{
//         event.preventDefault();
//         updata({...data,wcal:((10*data.weight)+(6.25*data.height)-(5*data.wage)-16)*1.9,wbmr:((10*data.weight)+(6.25*data.height)-(5*data.wage)-16)})
//     }
//         // b({...a,bmr:((10*a.w)+(6.25*a.h)+(5*a.age)+5)})
//     return <div>
//         {/* <h2>{JSON.stringify(a)}</h2> */}
//         <img width="1440" height="610" src="https://prod-gymfitty-web-public.s3.eu-west-2.amazonaws.com/endurance-for-lifters.jpg" />
//         <div className="x container mt-4">
//             <div className="row">
//                 <div className="col-6">
//                     <h1>Calorie and Bmr form Men</h1>
//         <form>
//             <div className="form-head bg-dark">
//             <lebel className="form-label">Body Weight</lebel>
//             <input placeholder="enter your body weight" type="number" name="w" onChange={update} className="form-control"/>
//             </div>
//             <div className="mt-3">
//             <lebel>Height</lebel>
//             <input placeholder="enter your height" className="form-control" type="number" name="h" onChange={update} />
//             </div>
//             <div className="mt-3">
//             <lebel>Age</lebel>
//             <input placeholder="enter your age" className="form-control" type="number" name="age" onChange={update} />
//             </div>
//             <div className="mt-4">
//             <h3 className="form-control">BMR:{a.bmr}</h3>
//             </div>
//             <div className="mt-4">
//             <h3 className="form-control">Calorie:{a.calorie}</h3>
//             </div>
//             <button className="mt-4 ml-6 btn btn-danger" onClick={def} >SUBMIT</button>
//         </form>
//         </div>
//         <div className="col-6">
//         {/* <h2>{JSON.stringify(data)}</h2> */}
//                     <h1>Calorie and Bmr form Women</h1>
//         <form>
//             <div className="form-head bg-dark">
//             <lebel className="form-label">Body Weight</lebel>
//             <input placeholder="enter your body weight" type="number" name="weight" onChange={hand} className="form-control"/>
//             </div>
//             <div className="mt-3">
//             <lebel>Height</lebel>
//             <input placeholder="enter your height" className="form-control" type="number" name="height" onChange={hand} />
//             </div>
//             <div className="mt-3">
//             <lebel>Age</lebel>
//             <input placeholder="enter your age" className="form-control" type="number" name="wage" onChange={hand} />
//             </div>
//             <div className="mt-4">
//             <h3 className="form-control">BMR:{data.wbmr}</h3>
//             </div>
//             <div className="mt-4">
//             <h3 className="form-control">Calorie:{data.wcal}</h3>
//             </div>
//             <button className="mt-4 ml-6 btn btn-danger" onClick={upd} >SUBMIT</button>
//         </form>
//         </div>
//         </div>


      
//         </div>
//     </div>
    
// }
class Cal extends Component{
    state={
        mage:'',
        mweight:'',
        mheight:'',
        mcal:0,
        mbmr:0,
        wage:'',
        wweight:'',
        wheight:'',
        wcal:0,
        wbmr:0,
    }
    update=(event)=>
    {
        this.setState({[event.target.name]:event.target.value})
    }
    prev=(event)=>
    {
        event.preventDefault();
        this.setState({mcal:((10*this.state.mweight)+(6.25*this.state.mheight)-(5*this.state.mage)+5)*1.9,mbmr:((10*this.state.mweight)+(6.25*this.state.mheight)-(5*this.state.mage)+5)})
    }
    wprev=(event)=>
    {
        event.preventDefault();
        this.setState({wcal:((10*this.state.wweight)+(6.25*this.state.wheight)-(5*this.state.wage)-16)*1.9,wbmr:((10*this.state.wweight)+(6.25*this.state.wheight)-(5*this.state.wage)-16)})
    }
render()
{
    return <div>
        <img width="1440" height="610" src="https://prod-gymfitty-web-public.s3.eu-west-2.amazonaws.com/endurance-for-lifters.jpg" />
        <div className="x container mt-3"> 
            <div className="row">
                <div className="col-6">
        
        <form>
            <div className="mt-4 bg-dark ">
            <lebel>AGE</lebel>
            <input className="form-control" name="mage" type="number" onChange={this.update} placeholder="enter your age..."/>
            </div>
            <div className="mt-4">
                <lebel>WEIGHT</lebel>
                <input className="form-control" name="mweight" type="number" onChange={this.update} placeholder="enter your weight..."/>
            </div>
            <div className="mt-4">
                <lebel>HEIGHT</lebel>
                <input className="form-control" name="mheight" type="number" onChange={this.update} placeholder="enter your age in cm..."/>
            </div>
            <div className="mt-4">
                <lebel>CALORIE</lebel>
                <h2 className="form-control">{this.state.mcal}</h2>
            </div>
            <div className="mt-4">
                <lebel>BMR</lebel>
                <h2 className="form-control">{this.state.mbmr}</h2>
            </div>
            <div className="mt-4">
                <button className="ml-6 btn btn-danger" onClick={this.prev}>SUBMIT</button>
            </div>
        </form>
        </div>
        
        <div className="col-6">
        
        <form>
            <div className="bg-dark mt-4">
            <lebel>AGE</lebel>
            <input className="form-control" name="wage" type="number" onChange={this.update} placeholder="enter your age..."/>
            </div>
            <div className="mt-4">
                <lebel>WEIGHT</lebel>
                <input className="form-control" name="wweight" type="number" onChange={this.update} placeholder="enter your weight..."/>
            </div>
            <div className="mt-4">
                <lebel>HEIGHT</lebel>
                <input className="form-control" name="wheight" type="number" onChange={this.update} placeholder="enter your age in cm..."/>
            </div>
            <div className="mt-4">
                <lebel>CALORIE</lebel>
                <h2 className="form-control">{this.state.wcal}</h2>
            </div>
            <div className="mt-4">
                <lebel>BMR</lebel>
                <h2 className="form-control">{this.state.wbmr}</h2>
            </div>
            <div className="mt-4">
                <button className="ml-6 btn btn-danger" onClick={this.wprev}>SUBMIT</button>
            </div>
        </form>
        </div>

        </div>
        </div>
    </div>
}
}
export default Cal
