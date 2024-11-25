import {FaPlus} from "react-icons/fa6";

function Bookings() {
  return (
       <div className="flex w-full h-full justify-between flex-col p-4 ">
         <div className="flex flex-row items-center justify-between">
           <div className="flex flex-col">
             <small>Home</small>
             <h1>Group1 Hotel</h1>
           </div>
           <button className="bg-[#079b31] flex flex-row p-3 px-4 items-center justify-between rounded-sm text-white">
             <FaPlus color="white"/>
             Create New Booking
           </button>
           <button className="bg-[#079b31] flex flex-row p-3 px-4 items-center justify-between rounded-sm text-white">
             <FaPlus color="white"/>
             Create New Service Record
           </button>
         </div>
         <div className={"w-full h-[92%] py-2 flex flex-row justify-between"}>
           <div className={"bg-white h-full w-[49%]"}></div>
           <div className={"bg-white h-full w-[49%]"}></div>
         </div>
       </div>
  )
}

export default Bookings