
import Sidebar from "./components/Layout/Sidebar";
import { Notifications } from "./pages/Notifications";
import { Tweets } from "./pages/Tweets";

function App() {
  
  return (
    <>
      <div className="min-h-screen" >
        <div className="flex h-screen ">
          <Sidebar/>
          <div className="flex w-full">
            <Tweets/>
            <Notifications/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
