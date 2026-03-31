

function Tab({isActiveTab, setIsActiveTab, tab}) {

  return (
    <button className={`tab ${isActiveTab === tab? 'active' : '' }`} 
          onClick = {()=>setIsActiveTab(tab)}>Tab{tab +1}</button>
  )
}

export default Tab