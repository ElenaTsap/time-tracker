import Switch from "react-switch";
import {ContextCreator} from '../MyContext'
import {useContext} from 'react'

const MySwitch = () => {
    const context = useContext(ContextCreator);

    const handleChange = () => {
        let toggled = !context.checked;
        context.setChecked(toggled);
        console.log(context.checked);
    }

    return (
        <Switch 
            onChange={handleChange} 
            checked={context.checked} 
            offColor="#fff"
            onColor="#fff"
            offHandleColor="#3c038c"
            onHandleColor="#e1c13b"
            uncheckedIcon="false"
            checkedIcon="false"
            height="24"
            width="40"
        />
    )
}

export default MySwitch

