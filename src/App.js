import { useEffect, useState } from 'react';
import './App.css';
import HeaderBottom from './components/headerBottom/HeaderBottom';
import { Overlay } from "./utils"
import HeaderTop from './components/headerTop/HeaderTop';
import SignUp from './components/signup/SignUp';
import Routes from "./routes"
import Rent from './components/rent/Rent';
import Catalog from './components/catalog/Catalog';

function App() {
  const [isSignUpActive, setisSignUpActive] = useState(false)
  const [isSignUpEnter, setIsSignUpEnter] = useState(false)
  const [isRentActive, setIsRentActive] = useState(false)
  const [isRentEnter, setIsRentEnter] = useState(false)
  const [isCatalogActive, setIsCatalogActive] = useState(false)
  const [isCatalogEnter, setIsCatalogEnter] = useState(false)

  useEffect(() => {
    if (isSignUpActive) {
      document.body.style.overflow = "hidden"
    }
    else{
      document.body.style.overflow = "auto"
    }
  }, [isSignUpActive])

  return (
    <div>
        <HeaderTop />
        <HeaderBottom setisSignUpActive={setisSignUpActive} setIsSignUpEnter={setIsSignUpEnter} setIsCatalogActive={setIsCatalogActive} setIsCatalogEnter={setIsCatalogEnter}/>
        <Routes />
        <SignUp isSignUpActive={isSignUpActive} setisSignUpActive={setisSignUpActive} isSignUpEnter={isSignUpEnter} setIsSignUpEnter={setIsSignUpEnter}/>
        <Rent isRentActive={isRentActive} setIsRentActive={setIsRentActive} isRentEnter={isRentEnter} setIsRentEnter={setIsRentEnter}/>
        <Catalog isCatalogActive={isCatalogActive} setIsCatalogActive={setIsCatalogActive} isCatalogEnter={isCatalogEnter} setIsCatalogEnter={setIsCatalogEnter}/>
        {
          isSignUpActive && <Overlay type="singup" state={isSignUpActive} callback={setisSignUpActive}/>
        }
        {
          isCatalogActive && <Overlay type="catalog" state={isCatalogActive} callback={setIsCatalogActive}/>
        }
    </div>
  );
}

export default App;
