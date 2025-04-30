import "./Cards.css"
export function Cards(){
    return(
        <div className="services-section">
  <div className="service-card">
    <div className="service-icon">🚗</div>
    <h3>Largest Dealership of Cars</h3>
    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.</p>
    <div className="underline"></div>
  </div>

  <div className="service-card active">
    <div className="service-icon">⚙️</div>
    <h3>Unlimited Repair Warranty</h3>
    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.</p>
    <div className="underline"></div>
  </div>

  <div className="service-card">
    <div className="service-icon">📝</div>
    <h3>Insurance Support</h3>
    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.</p>
    <div className="underline"></div>
  </div>
</div>

    )
}