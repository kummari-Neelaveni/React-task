

import { Banner } from "./Components/Banner/Banner";
import { Brands } from "./Components/Brands/Brands";
import { Carcard } from "./Components/Carcard/Carcard";
import { Cards } from "./Components/Cards/Cards";
import { Carsection } from "./Components/Carsection/Carsection";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
import { Search } from "./Components/Search/Search";
import { Testimonils } from "./Components/Testimonials/Testimonials";


function App() {
    return (
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <Search></Search>
        <Cards></Cards>
        <Carsection></Carsection>
        <Carcard></Carcard>
        <Testimonils></Testimonils>
        <Brands></Brands>
        <Footer></Footer>
        
      </div>
    );
  }
  
  export default App;