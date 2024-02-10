import { Navbar, Search, TabInterface } from "../../components";
import useCustomNavigation from "../../hooks/useCustomNavigation";
import { InventoryPanel } from "@/components/WaitingRoom";
import { RoomCard } from "@/components/WaitingRoom";

const WaitingRoom = () => {
  const { goToHome } = useCustomNavigation();

  const handleSearch = (searchQuery: string) => {
    // Logic to handle search action, e.g., filtering rooms
  };
  const tabs = [
    { label: "Available", disabled: false },
    { label: "Playing", disabled: false },
    { label: "ALL", disabled: false },
  ];

  return (
      <div className="relative min-h-screen 
      flex flex-col justify-start
      bg-black/50
        "
        style={{
          backgroundImage: "url(images/Background.png)",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover"}}
        >
        {/* <div className="absolute inset-0 bg-black opacity-50 z-10" /> */}
        <Navbar onBackClick={goToHome} getHomePage={false} />

        <div className="my-2 mx-4
        flex justify-start gap-4
        p-2 px-4 border border-red-500
        h-[80vh]
        ">

          {/* inventory panel */}
          <div className="w-1/3 py-3">
            <InventoryPanel />
          </div>

          {/* room list */}
          <div className="w-full
          flex flex-col p-4
          ">

                <div className="flex items-center">
                  <Search onSearch={handleSearch} />
                  <div className="ml-2">
                    <TabInterface tabs={tabs} initialActiveTab="Available" />
                  </div>
                </div>

                <div className="h-full border border-green-500
                p-1
                grid grid-cols-2 gap-4
                overflow-y-auto
                ">
                  {/* Render the list of rooms here */}
                  <RoomCard />
                  <RoomCard />

                </div>

              
          </div>

        </div>
      </div>
  );
};

export default WaitingRoom;
