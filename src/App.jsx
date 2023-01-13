import Form from '../components/Form'
import List from '../components/List'
import { useState, useEffect } from 'react'
import {collection, getDocs, addDoc, deleteDoc, doc, updateDoc} from 'firebase/firestore'
import db from './firebase'

function App() {
  const [task, setTask] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState('')
  const [error, setError] = useState('')
  const [tasks, setTasks] = useState([])
  useEffect( ()=> {
    const getData = async () => {
      try {
        const data = await getDocs(collection(db, 'tasks'));
        const arrData = data.docs.map( doc => ({id: doc.id, ...doc.data() }))
        setTasks(arrData)
      } catch (err) {
        console.error(err)
      }
    }

    getData()
  }, [])
  
  return (
    <>
      <h1>Todo React App</h1>
      <main>
        <List tasksState={{setTasks, tasks, task, setTask, setEditMode, setId}} fireBaseUtils={{doc, deleteDoc, db}} />
        <Form tasksState={{task, setTask, tasks, setTasks, editMode, setEditMode, id, setId}} fireBaseUtils={{addDoc, collection, db, updateDoc, doc}} />
        
      </main>
    </>
  )
}

export default App
