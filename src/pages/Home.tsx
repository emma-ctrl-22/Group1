import { FaPlus } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaBuildingCircleArrowRight } from "react-icons/fa6";
import { MdOutlineLocalLaundryService } from "react-icons/md";

type CardProps = {
  icon: React.ReactNode
  title: string
  value: string
}

const CardItems:CardProps[] = [
  { icon: <FaHome color="black" />, title: "New Bookings", value: "45" },
  { icon: <FaBook color="black" />, title: "Available Rooms", value: "124" },
  { icon: <FaBuildingCircleArrowRight />, title: "Check ins", value: "804" },
  { icon: <MdOutlineLocalLaundryService />, title: "Check Outs", value: "38" }
]

const Card = ({ icon, title, value }):CardProps => {
  return (
    <div className="w-[20%] h-[95%] bg-white  flex flex-row items-center justify-center gap-10">
      <span className="bg-gray-200 rounded-sm flex items-center justify-center p-3">{icon}</span>
      <div className=" bg-white rounded-md flex flex-col">
        <small className="text-black font-bold text-xs">{title}</small>
        <h1 className="text-black text-md font-bold">{value}</h1>
      </div>
    </div>
  )
}

export default function Home() {
  return (
      <div className="flex w-full h-full flex-col p-4 items-center justify-between ">
        <div className="w-full h-[25%] flex flex-col justify-between">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
              <small>Home</small>
              <h1>Group1 Hotel</h1>
            </div>
            <button className="bg-[#079b31] flex flex-row p-3 px-4 items-center justify-between rounded-sm text-white">
              <FaPlus color="white"/>
              Create new Booking
            </button>
          </div>
          <div className="w-full h-[70%] py-3 flex flex-row justify-between">
            {CardItems.map((item, index) => (
                <Card key={index} icon={item.icon} title={item.title} value={item.value}/>
            ))}
          </div>
        </div>
        <div className="w-full h-[70%] flex flex-row items-center justify-between">
          <div className="bg-white w-[48%] h-[100%]"></div>
          <div className="w-[48%] h-[100%] flex flex-col justify-between">
            <div className="bg-white h-[48%]"></div>
            <div className="bg-white h-[48%]"></div>
          </div>
        </div>
      </div>
  )
}
