export default function TaskBox(props) {
  if(props.length>0){
    console.log(props);
    return (
      <div id="taskBox">
        <ul>
          <li id="{props.id}">
            <input type="checkbox" name="{props.name}" id="{props.name}"/>
            <label htmlFor="{props.name}">{props.name}</label>
            <span className="removeButton">
              <button id="{props.ID}">X</button>
            </span><br/><br/>
          </li>
        </ul>
      </div>
    )
  }
  else {
    return null;
  }
}