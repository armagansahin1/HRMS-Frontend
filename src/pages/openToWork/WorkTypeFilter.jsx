import React,{useEffect, useState} from 'react'
import { Menu } from 'semantic-ui-react'
import { changeWorkType } from '../../store/actions/workTypeFilterActions'
import { useDispatch } from "react-redux";
import WorkTypeService from "../../services/workTypeService"

export default function WorkTypeFilter() {

   const dispatch = useDispatch()
   const workTypeService = new WorkTypeService() 
   const [activeItem, setActiveItem] = useState()
   const [workTypes, setWorkTypes] = useState([])

   useEffect(() => {
     workTypeService.getAll().then(result=>{
       setWorkTypes(result.data.data)
     })
   }, [])

   const handleItemClick = (e,{name})=>{
      setActiveItem(name)
      dispatch(changeWorkType(name))
   }

    return (
        <div>
    <Menu text vertical style ={{marginTop:"50px"}}>
        <Menu.Item header>Çalışma Türü</Menu.Item>
        <Menu.Item
          name='Hepsi'
          active={activeItem === 'Hepsi'}
          onClick={handleItemClick}
        />
        {workTypes.map(w=>(
            <Menu.Item
            name={w.workType}
            active={activeItem === w.workType}
            onClick={handleItemClick}
          />
        ))}
      </Menu>
        </div>
    )
}
