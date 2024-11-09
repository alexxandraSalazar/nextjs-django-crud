"use client"
import {useState} from "react";
import fetch from 'isomorphic-fetch'

function FormTask (){

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async (e) =>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/`, {
            method: "POST",
            body: JSON.stringify({title, description}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        console.log(data)
    };

    return (
        <div className="bg-slate-200 p-7">
            <form action={handleSubmit}>
                <h1 className="text-black font-bold">Añadir Tarea</h1>
                <label htmlFor="title"
                       className="text-xs text-black">
                    Title:
                </label>

                <input type="text"
                       name="title"
                       className="bg-slate-400 rounded-b-md p-2 mb-2 block w-full text-slate-900"
                       onChange={(e) => setTitle(e.target.value)}/>

                <label htmlFor="title"
                       className="text-xs text-black">
                    Description:
                </label>

                <textarea name="description"
                          className="bg-slate-400 rounded-b-md p-2 mb-2 block w-full text-slate-900"
                          onChange={(e) => setDescription(e.target.value)}></textarea>

                <button className="bg-indigo-500 text-white p-2 block w-full">SAVE</button>
            </form>
        </div>
    )
}

export default FormTask