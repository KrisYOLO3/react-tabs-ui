import { FcLike } from "react-icons/fc";
import Button from './Button'
import {useState} from 'react'


function TabContent({item}) {

  const [isShow, setIsShow] = useState(true);
  const [likes, setLikes] = useState(0);

  console.log('render')

  const handleUndo =()=>{
    setIsShow(true)
    setLikes(0)
    console.log(likes)//  получает предыдущее состояние
  }
  
  const handleUndoIn2Sec =()=>{
    setTimeout(handleUndo,
       2000)
  }


  return (
    <div className='tab-content'>

      <div className='description'>
        <h3>{item.tittle}</h3>
        {isShow && item.description}
      </div>

      <div className='tab-actions'>
        <Button className='hide' onClick = {()=>setIsShow(!isShow)}>{isShow ? 'Hide details' : 'Show details'}</Button>
        
        <div className='hearts-counter'>
          <span className='counter'>{likes}<FcLike size={25}/></span>
          <Button className='increase' onClick = {()=>setLikes(likes =>likes+1)}>+</Button>
          <Button className='increase' onClick = {()=>setLikes(likes =>likes+3)}>+++</Button>
        </div>
      </div>

      <div className='undo'>
        <Button className='undo-btn' onClick = {handleUndo}>Undo</Button>
        <Button className='undo-btn' onClick = {handleUndoIn2Sec}>Undo in 2s</Button>
      </div>


    </div> 
  )
}

export default TabContent