import './Logs.css'

const Logs = ({ logData, timeFormatter }) => {
    const allLogs = logData.map((item,index) =>
    <tr>
        <td>{item.projectName}</td>
        <td>{item.startDate}</td>
        <td>{timeFormatter(item.logDurationSec)}</td>
    </tr>

);

    return (
        <section className ='logs-container'> 
            <table>
                <tr>
                    <th>Project</th>
                    <th>Date started</th>
                    <th>Duration</th>
                </tr>
                {allLogs}
            </table>
        </section>
    )
}

export default Logs
