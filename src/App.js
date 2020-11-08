import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';
import Careers from './components/Careers';
import Payment from './components/Payment';
import PaymentHistory from "./components/PaymentHistory";

import SofaCleaning from './components/Services/Cleaning/SofaCleaning/SofaCleaning';
import SofaCleaningCart from './components/Services/Cleaning/SofaCleaning/SofaCleaningCart';
import BathroomCleaning from './components/Services/Cleaning/BathroomCleaning/BathroomCleaning';
import BathroomCleaningCart from './components/Services/Cleaning/BathroomCleaning/BathroomCleaningCart';
import KitchenCleaning from './components/Services/Cleaning/KitchenCleaning/KitchenCleaning';
import KitchenCleaningCart from './components/Services/Cleaning/KitchenCleaning/KitchenCleaningCart';


import Electrician from './components/Services/Home Service/Electrician/Electrician';
import ElectricianCart from './components/Services/Home Service/Electrician/ElectricianCart';
import Plumber from './components/Services/Home Service/Plumber/Plumber';
import PlumberCart from './components/Services/Home Service/Plumber/PlumberCart';
import Carpenter from './components/Services/Home Service/Carpenter/Carpenter';
import CarpenterCart from './components/Services/Home Service/Carpenter/CarpenterCart';


import MicrowaveRepair  from "./components/Services/ElectronicRepair/microwaveRepair/MicrowaveRepair";
import MicrowaveRepairCart  from "./components/Services/ElectronicRepair/microwaveRepair/MicrowaveRepairCart";
import TVRepair  from "./components/Services/ElectronicRepair/tvRepair/TVRepair";
import TVRepairCart  from "./components/Services/ElectronicRepair/tvRepair/TVRepairCart";
import WaterRepair  from "./components/Services/ElectronicRepair/waterRepair/WaterRepair";
import WaterRepairCart  from "./components/Services/ElectronicRepair/waterRepair/WaterRepairCart";
import ACRepair  from "./components/Services/ApplianceRepair/acRepair/ACRepair";
import ACRepairCart  from "./components/Services/ApplianceRepair/acRepair/ACRepairCart";
import WMRepair  from "./components/Services/ApplianceRepair/washingMachineRepair/WashingMachineRepair";
import WMRepairCart  from "./components/Services/ApplianceRepair/washingMachineRepair/WashingMachineRepairCart";
import FridgeRepair  from "./components/Services/ApplianceRepair/fridgeRepair/FridgeRepair";
import FridgeRepairCart  from "./components/Services/ApplianceRepair/fridgeRepair/FridgeRepairCart";
import Review from './components/Review';

import MakeUp from './components/Services/Salon/makeUp/MakeUp';
import MakeUpCart from './components/Services/Salon/makeUp/MakeUpCart';
import SalonAtHomeWomen  from './components/Services/Salon/SalonAtHome/SalonAtHomeWomen';
import SalonAtHomeWomenCart from './components/Services/Salon/SalonAtHome/SalonAtHomeWomenCart';
import Haircut from './components/Services/Salon/Hair/Haircut';
import HaircutCart from './components/Services/Salon/Hair/HaircutCart';
import CartModal from './components/Services/Cleaning/SofaCleaning/CartModal';

import BodyMassage from './components/Services/Massage/BodyMassage/BodyMassage';
import BodyMassageCart from './components/Services/Massage/BodyMassage/BodyMassageCart';

function App() {
  return (
      <BrowserRouter>
        <Switch>
            <ScrollToTop>
              <div className="App">
                  <Navbar />
                  <Route path="/" exact component={Home}/>
                  <Route path="/about" component={AboutUs}/>
                  <Route path="/contact" component={ContactUs}/>
                  <Route path="/payment" component={Payment}/>
                  <Route path="/paymenthistory" exact component={PaymentHistory}/>
                  <Route path="/paymenthistory/review" component={Review}/>

                  <Route path="/careers" component={Careers}/>

                  <Route path="/Cleaning/sofaCleaning" exact component={SofaCleaning}/>
                  <Route path="/Cleaning/sofaCleaning/shop" component={SofaCleaningCart}/>
                  <Route path="/Cleaning/bathroomCleaning" exact component={BathroomCleaning}/>
                  <Route path="/Cleaning/bathroomCleaning/shop" component={BathroomCleaningCart}/>
                  <Route path="/Cleaning/kitchenCleaning" exact component={KitchenCleaning}/>
                  <Route path="/Cleaning/kitchenCleaning/shop" component={KitchenCleaningCart}/>
                  
                  <Route path="/HomeService/plumber" exact component={Plumber}/>
                  <Route path="/HomeService/plumber/shop" component={PlumberCart}/>
                  <Route path="/HomeService/electrician" exact component={Electrician}/>
                  <Route path="/HomeService/electrician/shop" component={ElectricianCart}/>
                  <Route path="/HomeService/carpenter" exact component={Carpenter}/>
                  <Route path="/HomeService/carpenter/shop" component={CarpenterCart}/>

                  <Route path="/Salon/makeup" exact component={MakeUp}/>
                  <Route path="/Salon/makeup/shop" component={MakeUpCart}/>
                  <Route path="/Salon/salonAtHomeWomen" exact component={SalonAtHomeWomen}/>
                  <Route path="/Salon/salonAtHomeWomen/shop"  component={SalonAtHomeWomenCart}/>
                  <Route path="/Salon/haircut" exact component={Haircut}/>
                  <Route path="/Salon/haircut/shop" component={HaircutCart}/>
                  
                  <Route path="/ElectronicRepair/microwaveRepair" exact component={MicrowaveRepair}/>
                  <Route path="/ElectronicRepair/microwaveRepair/shop" component={MicrowaveRepairCart}/>
                  <Route path="/ElectronicRepair/tvRepair" exact component={TVRepair}/>
                  <Route path="/ElectronicRepair/tvRepair/shop" component={TVRepairCart}/>
                  <Route path="/ElectronicRepair/waterRepair" exact component={WaterRepair}/>
                  <Route path="/ElectronicRepair/waterRepair/shop" component={WaterRepairCart}/>
                  <Route path="/ApplianceRepair/acRepair" exact component={ACRepair}/>
                  <Route path="/ApplianceRepair/acRepair/shop" component={ACRepairCart}/>
                  <Route path="/ApplianceRepair/washingMachineRepair" exact component={WMRepair}/>
                  <Route path="/ApplianceRepair/washingMachineRepair/shop" component={WMRepairCart}/>
                  <Route path="/ApplianceRepair/fridgeRepair" exact component={FridgeRepair}/>
                  <Route path="/ApplianceRepair/fridgeRepair/shop" component={FridgeRepairCart}/>

                  
                  <Route path="/Massage/bodyMassage" exact component={BodyMassage}/>
                  <Route path="/Massage/bodyMassage/shop" component={BodyMassageCart}/>

                  <CartModal />
                  <Footer />    

                  
                   
              </div>
            </ScrollToTop>
          </Switch>
      </BrowserRouter>
  );
}


export default App;
