const Header = ({ currentUser, setLoggedIn }) => {

    const logOut = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            setLoggedIn(false);
            localStorage.removeItem('api-to-go');
        } 
    }

    return (
        <section>
            <h3>Welcome {currentUser}</h3>
            <button onClick = {logOut}>logout</button>
        </section>
    )
}

export default Header
