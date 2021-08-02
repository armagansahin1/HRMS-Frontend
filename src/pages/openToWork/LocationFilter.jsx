import React,{useState,useEffect} from 'react'
import { Menu } from 'semantic-ui-react'
import { useDispatch } from "react-redux";
import { changeLocation } from "../../store/actions/locationFilterActions";
import CityService from "../../services/cityService"
export default function LocationFilter() {
    const cityService = new CityService()
    const [cities, setCities] = useState([])
    const [activeItem, setActiveItem] = useState("Hepsi")
    const dispatch = useDispatch()
    useEffect(() => {
        cityService.getAllOrderByCityNameAsc().then(result=>{
          setCities(result.data.data)
        })
    },)
    const handleItemClick = (e,{name})=>{
        setActiveItem(name)
        dispatch(changeLocation(name))
     }
    return (
        <div>
        <Menu text vertical style ={{marginTop:"50px"}}>
        <Menu.Item header>Konuma Göre Göster</Menu.Item>
        <Menu.Item
          name='Hepsi'
          active={activeItem === 'Hepsi'}
          onClick={handleItemClick}
        />
        {cities.map(c=>(
            <Menu.Item
            name={c.cityName}
            active={activeItem === c.cityName}
            onClick={handleItemClick}
          />
        ))}
      </Menu>
        </div>
    )
}
