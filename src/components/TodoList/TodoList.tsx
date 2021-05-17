import React, { FormEvent, useState, useEffect, useRef } from "react"
import { TasksType } from "../../types/types"
import clsx from "clsx"

const TodoList = () => {
  const [task, setTask] = useState<string>("")
  const [tasks, setTasks] = useState<TasksType[]>([])
  const [done, setDone] = useState<boolean>(false)
  const [id, setId] = useState(1)
  const inputRef = useRef<any>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [task])
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTask(task)
    setTask("")
  }
  const addTask = (name: string) => {
    if (!name) return
    setId(prevId => prevId + 1)
    const newTasks: TasksType[] = [...tasks, { name, done, id }]
    setTasks(newTasks)
  }
  const toggleDoneTask = (id: number) => {
    const newTasks: TasksType[] = [...tasks]
    newTasks[id].done = !newTasks[id].done
    setTasks(newTasks)
  }
  return (
    <>
      <h1 className="text-center my-3">Lista de tareas</h1>
      <form onSubmit={handleSubmit} className="form-group mb-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={task}
            onChange={e => setTask(e.target.value)}
            ref={inputRef}
            placeholder="Agregue una tarea"
          />
          <div className="input-group-prepend">
            <button className="btn btn-success">Crear</button>
          </div>
        </div>
      </form>
      <div className="my-3">
        <ul className="list-group">
          {tasks.map((task: TasksType) => {
            const style = clsx({
              btn: true,
              "btn-success": !task.done,
              "btn-danger": task.done,
            })
            const liStyle = clsx({
              "d-flex justify-content-between list-group-item": true,
              "list-group-item-secondary": task.done,
            })
            return (
              <li className={liStyle} key={task.id}>
                <p
                  style={{
                    textDecorationLine: task.done ? "line-through" : "",
                  }}
                >
                  {task.name}
                </p>
                <button
                  onClick={() => toggleDoneTask(task.id - 1)}
                  className={style}
                >
                  {!task.done ? "✓" : "✗"}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default TodoList
