import Bottomleft from "./components/Bottomleft"
import Bottomright from "./components/Bottomright"
const Bottomsection = () => {
  return (
    <div className="m-[120px] bg-[#F4F4F4]">
        <div className="flex flex-col justify-between lg:flex-row ">
            <Bottomleft />
            <Bottomright />
        </div>
    </div>
    
  )
}

export default Bottomsection
