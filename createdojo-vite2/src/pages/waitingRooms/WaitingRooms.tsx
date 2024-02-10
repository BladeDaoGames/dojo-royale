import { Navbar, Search, TabInterface } from "../../components";
import useCustomNavigation from "../../hooks/useCustomNavigation";
import { InventoryPanel } from "@/components/WaitingRoom";

const WaitingRoom = () => {
  const { goToHome } = useCustomNavigation();

  const handleSearch = (searchQuery: string) => {
    // Logic to handle search action, e.g., filtering rooms
  };
  const tabs = [
    { label: "All", disabled: false },
    { label: "Waiting", disabled: false },
    { label: "On-going", disabled: false },
  ];

  return (
      <div className="relative min-h-screen 
      
      flex flex-col justify-center
      bg-black/50
        "
        style={{
          backgroundImage: "url(images/Background.png)",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover"}}
        >
        {/* <div className="absolute inset-0 bg-black opacity-50 z-10" /> */}
        <Navbar onBackClick={goToHome} getHomePage={false} />

        <div className="my-2 mx-4 flex-grow
        border-red-500 border
        flex justify-start gap-4
        p-2 px-4
        ">
          <div className="w-1/3">
            <InventoryPanel />
          </div>

          <div className="w-full border border-orange-500
          flex flex-col p-4
          ">

                <div className="flex items-center">
                  <Search onSearch={handleSearch} />
                  <TabInterface tabs={tabs} initialActiveTab="All" />
                </div>

                <div className="h-full border border-green-500">
                  {/* Render the list of rooms here */}
                </div>

              
            </div>

        </div>
      </div>
  );
};

export default WaitingRoom;
