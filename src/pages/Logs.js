import './Logs.css'
import { FaTrash } from 'react-icons/fa';

const Logs = ({ logData, setLogData, timeFormatter }) => {
    const deleteLog = ((item, index) => {
        if (window.confirm(`Are you sure you want to delete this log? This action cannot be reversed`)) {
            let oldLogData = [...logData]
            oldLogData.splice(index, 1);
            setLogData(oldLogData);
        }
    })

/*     const allLogs = logData.map((item,index) =>
    <tr key = {item.id}>
        <td>{item.projectName}</td>
        <td>{item.startDate}</td>
        <td>{item.startTime} - {item.endTime}</td>
        <td>{timeFormatter(item.logDurationSec)}</td>
        <td><FaTrash onClick={(e) => deleteLog(item, index)}/></td>
    </tr>
); */

    const allLogs = logData.map((item,index) => {
        if (item.logDurationSec > 0) { 
            return (<tr key = {item.id}>
                <td>{item.projectName}</td>
                <td>{item.startDate}</td>
                <td>{item.startTime} - {item.endTime}</td>
                <td>{timeFormatter(item.logDurationSec)}</td>
                <td><FaTrash onClick={(e) => deleteLog(item, index)}/></td>
            </tr>)
        }
    }

    );

    return (
        <section className ='logs-container'> 
            <table>
                <tr>
                    <th>Project</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Duration</th>
                    <th>Delete</th>
                </tr>
                {allLogs}
            </table>
        </section>
    )
}

export default Logs
