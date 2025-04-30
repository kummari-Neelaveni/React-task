 import "./Testimonials.css"
 
 export function Testimonils(){
    return(
        <div>
            <h1 className="testimonial-auto">Who Our Clients Say</h1>
        
        <section className="testimonial-section">
         
        <div className="testimonial-card">
          <img src="https://i.pravatar.cc/100?img=12" alt="Tomas Lili" className="avatar" />
          <p className="testimonial-text">
            Sed ut pers unde omnis iste natus error sit voluptatem accusantium
            dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.
          </p>
          <p className="testimonial-name"><strong>Tomas Lili</strong><br />New York</p>
        </div>
  
        <div className="testimonial-card active">
          <img src="https://i.pravatar.cc/100?img=32" alt="Romi Rain" className="avatar" />
          <p className="testimonial-text">
            Sed ut pers unde omnis iste natus error sit voluptatem accusantium
            dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.
          </p>
          <p className="testimonial-name"><strong>Romi Rain</strong><br />London</p>
        </div>
  
        <div className="testimonial-card">
          <img src="https://i.pravatar.cc/100?img=60" alt="John Doe" className="avatar" />
          <p className="testimonial-text">
            Sed ut pers unde omnis iste natus error sit voluptatem accusantium
            dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.
          </p>
          <p className="testimonial-name"><strong>John Doe</strong><br />Washington</p>
        </div>
      </section>
      </div>
    )
 }