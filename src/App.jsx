import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";

function App() {
  
  return (
    <>
      <div className="min-h-screen" >
        <div className="flex h-screen ">
          <Sidebar/>
          <div>
            <Header/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
