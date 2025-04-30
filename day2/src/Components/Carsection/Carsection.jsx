 import "./Carsection.css"
 export function Carsection(){
    return(
        <div>
                <div className="latest">
                    <p>checkout the latest cars</p>
                    <h1>Newest cars</h1>
                </div>


             <section className="car-section">
      <div className="car-left">
        <img src="https://tse2.mm.bing.net/th?id=OIP.XU225Remieh8Qmb2HXf4AwHaEa&pid=Api&P=0&h=180"></img>
      </div>
      <div className="car-right">
        <h2>Chevrolet Camaro ZA100</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <p>
          Sed ut pers unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium.
        </p>
        <a href="#" className="btn">
          View Details
        </a>
      </div>
    </section>
        </div>
    )
}