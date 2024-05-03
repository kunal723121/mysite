let Workout=()=>
{
    return <div>
        <img width="1440" height="610" src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg" />
        <div className=" x">
            <div className="row">
                <div className="col-12">
                    <table className="mt-3 table table-hover table-striped">
                        <thead className="bg-dark text-white" >
                            <th>BodyPart</th>
                            <th>Workout-1</th>
                            <th>Workout-2</th>
                            <th>Workout-3</th>
                            <th>Workout-4</th>
                        </thead>
                        <tbody className="text-white">
                            <tr>
                                <td>Back</td>
                                <td>Lat pull-down</td>
                                <td>Close grip pull-down</td>
                                <td>Barbell-Rowing</td>
                                <td>Dead-lift</td>
                            </tr>
                            <tr>
                                <td>Chest</td>
                                <td>Incline chest-press</td>
                                <td>Cable-cross</td>
                                <td>Incline Fly</td>
                                <td>Push-up</td>
                            </tr>
                            <tr>
                                <td>Legs</td>
                                <td>Normal Squat</td>
                                <td>Machine-press</td>
                                <td>Leg-extension</td>
                                <td>Hamstring</td>
                            </tr>
                            <tr>
                                <td>Bicep</td>
                                <td>Dumbell-curl</td>
                                <td>Peachers-curl</td>
                                <td>Hammer-curl</td>
                                <td>Concentration-curl</td>
                            </tr>
                            <tr>
                                <td>Tricep</td>
                                <td>Close-grip pushup</td>
                                <td>Rope push-down</td>
                                <td>bar push-down</td>
                                <td>Single hand push-down</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
}
export default Workout