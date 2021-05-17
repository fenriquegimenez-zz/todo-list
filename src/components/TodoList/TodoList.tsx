import React, { FormEvent, useState, useEffect, useRef } from "react"
import { TasksType } from "../../types/types"

const TodoList = () => {
  const [task, setTask] = useState<string>("")
  const [tasks, setTasks] = useState<TasksType[]>([])
  const [id, setId] = useState(1)
  const inputRef = useRef<any>(null)
  useEffect(() => {
    inputRef.current?.focus()
  }, [task])
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTask(task)
    setTask("")
    console.log(tasks)
  }
  const addTask = (name: string) => {
    setId(prevId => prevId + 1)
    const newTasks: TasksType[] = [...tasks, { name, done: false, id }]
    setTasks(newTasks)
  }
  return (
    <>
      <h1 className="text-center">TodoList</h1>
      <form onSubmit={handleSubmit} className="form-group mb-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={task}
            onChange={e => setTask(e.target.value)}
            ref={inputRef}
          />
          <div className="input-group-prepend">
            <button className="btn btn-outline-secondary">Crear</button>
          </div>
        </div>
      </form>
      <ul>
        {tasks.map((task: TasksType) => {
          return <li key={task.id}>{`${task.id} - ${task.name}`}</li>
        })}
      </ul>
    </>
  )
}

export default TodoList
