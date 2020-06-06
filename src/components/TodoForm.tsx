import React, {useState} from 'react'

interface TodoFormProps {
    onAdd(title: string): void
}

export default function TodoForm(props: TodoFormProps) {
    const {onAdd} = props
    const [title, setTitle] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        onAdd(title)
        setTitle('')
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="row">
                <div className='col s10'>
                    <div className="input-field">
                        <input
                            id="form-input"
                            type="text"
                            className="validate"
                            value={title}
                            onChange={handleChange}
                        />
                        <label htmlFor="form-input">Ввeдите</label>
                    </div>
                </div>
                <div className='col s2'>
                    <div className='input-field'>
                        <button className="btn waves-effect waves-light" type="submit" name="action">
                            Заслать
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}