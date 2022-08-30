import { useState, useEffect} from "react";
import { BrowserRouter} from "react-router-dom";
import { useSelector } from "react-redux"
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import Backblur from "./components/Backblur";
import Sidenav from "./components/Sidenav";
import Pages from "./pages/Pages"
import Footer from "./components/Footer"

function App() {

  const [sideNav, setSideNav] = useState(false);
  const [logged, setLogged ] = useState(null);
  const user = useSelector(state => state.user.loggedUser);

  console.log(`dream user ${user}`)

  useEffect(() => {  
    setLogged(user ? true : false);
  }, [user])


  return (
    <BrowserRouter>
      <Logo logged={logged ? true : false} setLogged={setLogged} click={() => setSideNav(true)}/>
      <Backblur show={sideNav} click={() => setSideNav(false)}/>
      <Sidenav logged={logged ? true : false} show={sideNav} click={() => setSideNav(false)}/>
      <Nav />
      <Pages />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
