import React,{useState} from "react"

function ToDoList(){

    let [tasks,settasks]=useState([]);
    let [newtask,setnewtask]=useState("");

    const stntsk=(e)=>{
        setnewtask(e.target.value);
    }

    const Addnewtask=()=>{
        if(newtask.trim()==""){
            return;
        }
        settasks([...tasks,newtask])
        setnewtask("");
    }


    const deltask=(index)=>{
        settasks(tasks.filter((Element,idx)=> idx!=index))
    }

    const uptsk=(index)=>{
        if(index>0){
            const updatedtsks=[...tasks];

            [updatedtsks[index],updatedtsks[index-1]]=[updatedtsks[index-1],updatedtsks[index]];

            settasks(updatedtsks);
        }

    }

    const downtsk=(index)=>{
        if(index<tasks.length-1){
            const updatedtsks=[...tasks];

            [updatedtsks[index],updatedtsks[index+1]]=[updatedtsks[index+1],updatedtsks[index]];

            settasks(updatedtsks);
        }

    }

    return(
    <div>
        <h1>To-Do-List</h1>
        <input type="text" value={newtask} onChange={stntsk}/>
        <button className="btn add" onClick={Addnewtask}>Add</button>

        <ol >{tasks.map((Element,index)=>
            <li key={index}>
            <span className="tsk">{Element}</span>
            <button className="btn delete" onClick={()=>deltask(index)}>Delete</button>
            <button className="btn up" onClick={()=>uptsk(index)}>Up</button>
            <button className="btn down" onClick={()=>downtsk(index)}>Down</button>
            </li>)}
            </ol>
    </div>)
}
export default ToDoList