let Userdetails=(props)=>
{
    return <div>
            <div className="mt-10 card-header">
            <h1 className="card-header">{props.prop.id}</h1>
            <h3 className="card-header">{props.prop.name}</h3>
            <h3 className="card-header">{props.prop.username}</h3>
            <h3 className="card-header">{props.prop.email}</h3>
            <h3 className="card-header">{props.prop.phone}</h3>
        </div>
    </div>
}
export default Userdetails