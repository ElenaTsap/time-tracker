import './Logs.css'
import { FaTrash, FaArrowUp,  FaArrowDown} from 'react-icons/fa';
import { timeFormatter } from '../components/Tools'
import { ContextCreator } from '../MyContext'
import { useContext, useState } from 'react'

const Logs = () => {
    const context = useContext(ContextCreator);
    const [tableData, setTableData] = useState(context.logData);
    const [asc, setAsc] = useState(true);
    const [focus, setFocus] = useState(null);

    const sortingHandler = (dataType, column, asc) => {
        let displayData = [...tableData];
        setFocus(column);
        switch (dataType) {
            case 'name':
                displayData.sort((a, b) => {
                    if (asc === true) {
                        setAsc(false);
                        if (a.projectName < b.projectName) {
                            return -1;
                        }
                        if (a.projectName > b.projectName) {
                            return 1;
                        }
                    } else {
                        setAsc(true);
                        if (a.projectName < b.projectName) {
                            return 1;
                        }
                        if (a.projectName > b.projectName) {
                            return -1;
                        }
                    }
                        return 0;
                    });
                    setTableData(displayData);
                break;

            case 'duration':
                displayData.sort((a, b) => {
                    if (asc === true) {
                        setAsc(false);
                        if (a.logDurationSec < b.logDurationSec) {
                            return -1;
                        }
                        if (a.logDurationSec > b.logDurationSec) {
                            return 1;
                        }
                    } else {
                        setAsc(true);
                        if (a.logDurationSec < b.logDurationSec) {
                            return 1;
                        }
                        if (a.logDurationSec > b.logDurationSec) {
                            return -1;
                        }
                    }
                        return 0;
                    });
                    setTableData(displayData);
                break;
            
            case 'time':
                displayData.sort((a, b) => {
                    if (asc === true) {
                        setAsc(false);
                        if (a.startTime < b.startTime) {
                            return -1;
                        }
                        if (a.startTime > b.startTime) {
                            return 1;
                        }
                    } else {
                        setAsc(true);
                        if (a.startTime < b.startTime) {
                            return 1;
                        }
                        if (a.startTime > b.startTime) {
                            return -1;
                        }
                    }
                        return 0;
                    });
                    setTableData(displayData);
                break;
        
            default:
                break;
        } 

        setTableData(displayData);


    }

    const deleteLog = ((item, index) => {
        if (window.confirm(`Are you sure you want to delete this log? This action cannot be reversed`)) {
            let oldLogData = [...context.logData]
            oldLogData.splice(index, 1);
            context.setLogData(oldLogData);
        }
    })

    const allLogs = tableData.map((item, index) => {
        if (item.logDurationSec > 0) { 
            return (<tr key = {item.id}>
                <td >{item.projectName}</td>
                <td>{item.startDate}</td>
                <td>{item.startTime} - {item.endTime}</td>
                <td>{timeFormatter(item.logDurationSec)}</td>
                <td><FaTrash onClick={(e) => deleteLog(item, index)}/></td>
            </tr>)
        }
    });

    return (
        <section className ='logs-container'> 
            <table>
                <tr>
                <th onClick={() => sortingHandler('name', 'project', asc)}>Project {focus === 'project' && asc ? <FaArrowUp/> : focus === 'project' && !asc ? <FaArrowDown/> : ''}</th>
                    <th onClick={() => sortingHandler('time', 'date', asc)}>Date {focus === 'date' && asc ? <FaArrowUp/> : focus === 'date' && !asc ? <FaArrowDown/> : ''}</th>
                    <th onClick={() => sortingHandler('time', 'time', asc)}>Time {focus === 'time' && asc ? <FaArrowUp/> : focus === 'time' && !asc ? <FaArrowDown/> : ''}</th>
                    <th onClick={() => sortingHandler('duration', 'duration', asc)}>Duration {focus === 'duration' && asc ? <FaArrowUp/> : focus === 'duration' && !asc ? <FaArrowDown/> : ''}</th>
                    <th></th>
                </tr>
                {allLogs}
            </table>
        </section>
    )
}

export default Logs

/*     const allLogs = logData.map((item,index) =>
    <tr key = {item.id}>
        <td>{item.projectName}</td>
        <td>{item.startDate}</td>
        <td>{item.startTime} - {item.endTime}</td>
        <td>{timeFormatter(item.logDurationSec)}</td>
        <td><FaTrash onClick={(e) => deleteLog(item, index)}/></td>
    </tr>
); */
