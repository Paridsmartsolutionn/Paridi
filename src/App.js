import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FatureBlerje from "./pages/fature-blerje/FatureBlerje";
import FatureShitje from "./pages/fature-shitje/FatureShitje";
import FleteDalje from "./pages/flete-dalje/FleteDalje";
import FleteHyrje from "./pages/flete-hyrje/FleteHyrje";
import Import from "./pages/Import";
import Raporte from "./pages/Raporte/Raporte";
import { useEffect, useState } from "react";
// import SideBar from "./components/Navbar/SideBar";
import Footer from "./components/Navbar/Footer";
import Artikuj from "./pages/paneliIartikujve/Artikuj";
// import Pos from "./pages/Pos";
import Furnitor from "./pages/furnitor/Furnitor";
import Register from "./components/authenticate/register/Register";
import Home from "./pages/Home";
import mainAxios, { AxiosInterceptor, setAuthToken } from "./services/axios";
import AuthorizedRoute from "./services/AuthorizedRoute";
// import { useUser } from "./zustand/common";
import { getCookie, setCookie } from "./services/helpers";
import LandingPage from "./pages/landing-page/LandingPage";
import "./index.scss";
import Restorant from "./pages/POS/Restaurant/Restorant";
import Supermarket from "./pages/POS/SuperMarket/SuperMarket";
function App() {
  const [ndryshoKushtin, setNdryshoKushtin] = useState(false);
  const [hidePupUp, setHidePupUp] = useState(false);
  const layover = <div className="layover absolute"></div>;

  useEffect(() => {
    setAuthToken(getCookie("access_token"));
    // console.log('tokeni',access_token)
  }, []);

  return (
    <div className="app">
      {hidePupUp && layover}
      {ndryshoKushtin && layover}
      <AxiosInterceptor>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/Register" element={<Register />} />
              <Route path="/" element={<LandingPage />} />
              <Route
                path="/fature-blerje"
                element={
                  <AuthorizedRoute>
                    <FatureBlerje
                      hidePupUp={hidePupUp}
                      setHidePupUp={setHidePupUp}
                      roles={[1]}
                    />
                  </AuthorizedRoute>
                }
              />
              <Route
                path="/fature-shitje"
                element={
                  <AuthorizedRoute>
                    <FatureShitje
                      hidePupUp={hidePupUp}
                      setHidePupUp={setHidePupUp}
                    />
                  </AuthorizedRoute>
                }
              />

              <Route
                path="/home"
                element={
                  <AuthorizedRoute>
                    <Home />
                  </AuthorizedRoute>
                }
              />

              <Route
                path="/Artikuj"
                element={
                  <AuthorizedRoute>
                    <Artikuj
                      ndryshoKushtin={ndryshoKushtin}
                      setNdryshoKushtin={setNdryshoKushtin}
                    />
                  </AuthorizedRoute>
                }
              />

              {/* <Route
                path={"/Pos"}
                element={
                  <AuthorizedRoute>
                    <Pos />
                  </AuthorizedRoute>
                }
              /> */}
              <Route
                path={"/Pos/restorant"}
                element={
                  <AuthorizedRoute>
                    <Restorant />
                  </AuthorizedRoute>
                }
              />
              <Route
                path={"/Pos/supermarket"}
                element={
                  <AuthorizedRoute>
                    <Supermarket />
                  </AuthorizedRoute>
                }
              />

              <Route
                path="/flete-dalje"
                element={
                  <AuthorizedRoute>
                    <FleteDalje />
                  </AuthorizedRoute>
                }
              />

              <Route
                path="/flete-hyrje"
                element={
                  <AuthorizedRoute>
                    <FleteHyrje />
                  </AuthorizedRoute>
                }
              />

              <Route
                path="/Import"
                element={
                  <AuthorizedRoute>
                    <Import />
                  </AuthorizedRoute>
                }
              />

              <Route
                path="/Furnitor"
                element={
                  <AuthorizedRoute>
                    <Furnitor />
                  </AuthorizedRoute>
                }
              />

              <Route
                path="/raporte"
                element={
                  <AuthorizedRoute>
                    <Raporte />
                  </AuthorizedRoute>
                }
              />
            </Routes>
          </div>
          <Footer className="footer-position" />
        </BrowserRouter>
      </AxiosInterceptor>
    </div>
  );
}

// const Test=({children})=>{
//   return <div className='bg-red-600'>
// {children}
//   </div>
// }

export default App;
