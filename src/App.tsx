import React from "react";
import { RdtProvider } from "./rdt/RdtProvider";
import { rdt } from "./rdt/rdt";
import {
  BrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { Header } from "./layout/Header/Header";
import { StakingPage } from "./layout/Staking/StakingPage";
import { FarmingPage } from "./layout/Farming/FarmingPage";
import { LaunchpadPage } from "./layout/Launchpad/LaunchpadPage";
import { DexPage } from "./layout/Dex/DexPage";
function App() {
  return (
    <RdtProvider value={rdt}>
      <BrowserRouter>
        <Header />
        
        <main className="h-full min-h-[100vh]  relative w-full ">
          
          {/* <div className="py-[200px]"> */}
          <Routes>
            <Route index path="/staking" element={< StakingPage />} />
            <Route index path="/farming" element={< FarmingPage />} />
            <Route index path="/launchpad" element={< LaunchpadPage />} />
            <Route index path="/dex" element={< DexPage />} />

          </Routes>
          {/* </div> */}
        </main>
          
          
          

      </BrowserRouter>
    </RdtProvider>
  );
}

export default App;
