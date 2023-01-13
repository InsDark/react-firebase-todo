const List = ({tasksState : {tasks, setTasks, setTask, setEditMode, setId}, fireBaseUtils : {doc, deleteDoc, db}}) => {
  
  return (
    <section>
        <h2>Task's List</h2>
        <ul className="list-container">
          {
          tasks.length !== 0 ? 
          tasks.map(task => (
            <li key={task.id}>
               <span>{task.name}</span> 
               <div className="buttons">
                <button onClick={() => {
                  setEditMode(true)
                  setTask(task.name)
                  setId(task.id)
                }} >Edit</button>
                <button onClick={async() => {
                  const id = task.id;
                  await deleteDoc(doc(db, 'tasks', id))
                  const newTasks =  tasks.filter(task => task.id !== id)
                  setTasks(newTasks)
                  
                }}>Delete</button>
               </div>
            </li>
          ) ) : (<li>You dont have tasks yet</li>)}           

        </ul>
    </section>
  )
}

export default List