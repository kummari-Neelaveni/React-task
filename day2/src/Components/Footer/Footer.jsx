import"./Footer.css"
export function Footer(){
    return(
        <footer className="footer-section">
        <div className="footer-container">
          {/* Left Column */}
          <div className="footer-column">
            <h2>CARVILLA</h2>
            <p>
              Ased do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <p>name@domain.com</p>
            <p>+1 (222) 1234567890</p>
          </div>
  
          {/* Middle Left Column */}
          <div className="footer-column">
            <h3>ABOUT DEVLOON</h3>
            <ul>
              <li>About Us</li>
              <li>Career</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
  
          {/* Middle Right Column */}
          <div className="footer-column">
            <h3>TOP BRANDS</h3>
            <div className="footer-brands">
              <ul>
                <li>BMW</li>
                <li>Lamborghini</li>
                <li>Camaro</li>
                <li>Audi</li>
                <li>Infiniti</li>
                <li>Nissan</li>
              </ul>
              <ul>
                <li>Ferrari</li>
                <li>Porsche</li>
                <li>Land Rover</li>
                <li>Aston Martin</li>
                <li>Mercedes</li>
                <li>Opel</li>
              </ul>
            </div>
          </div>
  
          {/* Right Column */}
          <div className="footer-column">
            <h3>NEWS LETTER</h3>
            <p>Subscribe to get latest news update and informations</p>
            <div className="newsletter">
              <input type="email" placeholder="Add Email" />
              <button>&rarr;</button>
            </div>
          </div>
        </div>
      </footer>
    )
}