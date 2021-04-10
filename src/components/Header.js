import './Header.css'
const Header = ({ currentUser, setLoggedIn }) => {

    const logOut = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            setLoggedIn(false);
            localStorage.removeItem('api-to-go');
            localStorage.removeItem('current-user');
        } 
    }

    return (
        <section className='header-container'>
            <h3>Welcome <span>{currentUser}</span></h3>
            <button onClick = {logOut}>logout</button>
        </section>
    )
}

export default Header
