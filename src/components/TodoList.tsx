import React from 'react'
import {ITodo} from '../interfaces'

interface TodoListProps {
    todos: ITodo[]
    onToggle(id: number): void
    onRemove(id: number): void
}

export default function TodoList(props: TodoListProps) {
    const {todos, onToggle, onRemove} = props

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        onRemove(id)
    }

    if (todos.length === 0) {
        return (
            <div className='row'>
                <div className="col">
                    <p>Пока дел нет, но будут!</p>
                </div>
            </div>
        )
    }

    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                if (todo.completed) {
                    classes.push('completed')
                }
                return (
                    <li key={todo.id} className={classes.join(' ')}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => onToggle(todo.id)}
                            />
                            <span>{todo.title}</span>
                            <i
                                className='material-icons red-text'
                                onClick={event => removeHandler(event, todo.id)}
                            >
                                delete
                            </i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}