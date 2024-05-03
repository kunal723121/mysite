let Userlist=(prop)=>
{
    let cl=(y)=>
    {
        prop.p2(y)
    }
    return <div>
        <div className=" card-header">
        <table className="table text-white  table-hover table-striped">
            <thead>
                <th>ID</th>
                <th>NAME</th>
                <th>USERNAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
            </thead>
            <tbody>
                {
                    prop.p1.map((y)=>
                    {
                    return <tr onClick={cl.bind(null,y)}>
                            <td>{y.id}</td>
                            <td>{y.name}</td>
                            <td>{y.username}</td>
                            <td>{y.email}</td>
                            <td>{y.phone}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        </div>
    </div>
}
export default Userlist