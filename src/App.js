import '@shopify/polaris/build/esm/styles.css';
import { Header } from './Components/Header';
// import { Sidebar } from './Components/Sidebar';
import { Footer } from './Components/Footer';
// import { AddCustomer } from './Components/Customers/AddCustomer';
import { Customers } from './Components/Customers/Customers';

function App() {
  return (
    <div className="card">
      <Header></Header>
      {/* <AddCustomer></AddCustomer> */}
      <Customers></Customers>
      <Footer></Footer>
    </div>    
  );
}

export default App;
