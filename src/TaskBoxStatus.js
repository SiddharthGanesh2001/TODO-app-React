export default function TaskBoxStatus({ onClearCompleted }) {
  function handleClearCompleted(event) {
    onClearCompleted();
  }
  return (
    <div id="taskBoxStatus">
      <button id="clearCompleted" onClick={handleClearCompleted}>Clear Completed</button>
    </div>
  )
}