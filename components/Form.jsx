import { updateDoc } from "firebase/firestore"

const Form = ({tasksState : {setTask, task , setTasks, tasks, editMode, setEditMode, id, setId}, fireBaseUtils : {addDoc, collection, db, doc, updateDoc} }) => {
  const editTask = async (e) => {
    e.preventDefault()
    await updateDoc(doc(db, 'tasks', id), {name: task})
    setTask('')
    setEditMode(false)
    tasks.forEach(item => {
      if(item.id == id) {
       item.name = task
      }
    })
    setId('')
  }
  const addTask = async (e) => {
    e.preventDefault();
    const newTask = {date: Date.now(), name: task};
    const doc = await addDoc(collection(db, 'tasks'), newTask);
    setTasks([
      ...tasks, 
      {...newTask, id: doc.id}
    ])
    e.target.reset()
    setTask('')
  }
  return (
    <form onSubmit={editMode ? editTask : addTask}>

              <h2>{editMode ? "Edit Task" : 'Add Task'}</h2>
              <input type="text" value={task}  onChange={(e) => { 
                setTask(e.target.value)
              }}/>
              <input type="submit" value={editMode ? "Edit" : 'Add'} />
      
    </form>
  )
}

export default Form