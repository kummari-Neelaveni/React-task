import "./Navbar.css"
function Navbar(){
    return(
        <div id="navbar_container">
            <h1>welcome to Neelaveni</h1>
            <div id="navbar_links">
                <p>Home</p>
                <p>About</p>
                <p>contact</p>
                <input type="text" placeholder="search "></input>
            </div>
            <div id="navbar_buttons">
                <span>Login</span>
                <span>Signup</span>
            </div>
        </div>

    )   
    
}

export default Navbar