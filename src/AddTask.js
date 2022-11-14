export default function AddTask() {
    
  return(
    <div id="addTask">    
        <input type="text" name="addTask" placeholder="Add a task" id="addTaskBox" autoComplete="off"/>
        <input type="button" value="Add" id="add" onClick={this.addHandler}/>    
    </div>
  )
}
  