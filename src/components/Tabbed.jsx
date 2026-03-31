import Tab from './Tab'
import TabContent from './TabContent'
import {useState} from 'react'
import DifferentContent from './DifferentContent'



function Tabbed({content}) {

  const [isActiveTab, setIsActiveTab] = useState(0);
  console.log(<DifferentContent/>)



  return (
  <div className='content'> 
    <div className='tabbed'>
      <Tab isActiveTab= {isActiveTab} setIsActiveTab={setIsActiveTab} tab={0}/>
      <Tab isActiveTab= {isActiveTab} setIsActiveTab={setIsActiveTab} tab={1}/>
      <Tab isActiveTab= {isActiveTab} setIsActiveTab={setIsActiveTab} tab={2}/>
      <Tab isActiveTab= {isActiveTab} setIsActiveTab={setIsActiveTab} tab={3}/>
    </div>
    {isActiveTab <=2 ? (<TabContent item={content.at(isActiveTab)} key={content.at(isActiveTab).id}/>) : <DifferentContent/>}    
  </div> 

  )
}

export default Tabbed


