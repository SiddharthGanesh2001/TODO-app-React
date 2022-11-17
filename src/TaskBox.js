export default function TaskBox({ todoList, onCheck, onRemove }) {
  function handleCheck(event) {
    onCheck(event.target.id);
  }
  function handleRemove(event) {
    onRemove(event.target.id);
  }

  let tasks = todoList.map((item) => {
    return (
      <li key={item.ID}>
        <input type="checkbox" name={item.ID} id={item.ID} onClick={handleCheck} />
        <label htmlFor={item.ID}>{item.name}</label>
        <span className="removeButton">
          <button id={item.ID} onClick={handleRemove}>X</button>
        </span><br /><br />
      </li>
    )
  });
  return (
    <div id="taskBox">
      <ul>
        {tasks}
      </ul>
    </div>
  );
}
