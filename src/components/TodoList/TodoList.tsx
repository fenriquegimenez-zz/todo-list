import React, { FormEvent, useState, useEffect, useRef } from "react"
import { TasksType } from "../../types/types"
import clsx from "clsx"

const TodoList = () => {
  const [task, setTask] = useState<string>("")
  const [tasks, setTasks] = useState<TasksType[]>([])
  const [done, setDone] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [task])
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTasks(task)
    setTask("")
  }
  const addTasks = (todoName: string): void => {
    if (!todoName) return
    const newTasks: TasksType[] = [...tasks, { todoName, done }]
    setTasks(newTasks)
  }
  const toggleDoneTask = (id: number): void => {
    const newTasks: TasksType[] = [...tasks]
    newTasks[id].done = !newTasks[id].done
    setTasks(newTasks)
  }
  const removeTask = (id: number): void => {
    const newTasks: TasksType[] = [...tasks]
    newTasks.splice(id, 1)
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
            <button className="btn btn-success mx-3">Crear</button>
          </div>
        </div>
      </form>
      <div className="my-3">
        <ul className="list-group">
          {tasks.map((task: TasksType, id: number) => {
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
              <li className={liStyle} key={id}>
                <p
                  style={{
                    textDecorationLine: task.done ? "line-through" : "",
                  }}
                >
                  {task.todoName}
                </p>
                <div className="d-flex flex-row-reverse">
                  <button
                    onClick={() => removeTask(id)}
                    className="btn btn-outline-danger mx-2"
                  >
                    🗑
                  </button>
                  <button onClick={() => toggleDoneTask(id)} className={style}>
                    {!task.done ? "✓" : "✗"}
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default TodoList
