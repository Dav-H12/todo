import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { add,changeText,del } from './store/slices/todoSlice'
function App() {
  const dispatch = useDispatch()
 const {text,todos} =useSelector((state)=>state.todosData)

  return (
    <div >
     
       <input type="text" value={text} onChange={(e)=>dispatch(changeText(e.target.value))}/>
       <button onClick={()=>dispatch(add())}>+</button>
  
       {todos.map((el)=>{
       return <li>{el.title}
         <button onClick={()=>dispatch(del(el.id))}>X</button>
       </li>
       })
       }
    </div>
  )
}

export default App
