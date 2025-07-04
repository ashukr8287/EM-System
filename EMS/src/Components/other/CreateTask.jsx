import React, { useContext, useState } from 'react';
import "./CreateTask.css";
import { Authdata } from '../../Context/AuthContext';

function CreateTask() {
    let [formdata, setformdata] = useState({ title: "", date: "", assignto: "", category: "", description: "" });
    // let [newTask, setnewTask] = useState({});

    let changehandle = (e) => {
        setformdata((crr) => {
            return { ...crr, [e.target.name]: e.target.value };
        });
    };
  

    let submithandle = (e) => {
        e.preventDefault();
        console.log("formdata", formdata);
    
        const newtask = {
            title: formdata.title,
            description: formdata.description,
            assign: formdata.assignto,
            date: formdata.date,
            category: formdata.category,
            active: false,
            newTask: true,
            completed: false,
            failed: false,
        };
    
        // Get data from localStorage
        const userdata = JSON.parse(localStorage.getItem("employee")) || [];
    
        // Find matching employee
        const emp = userdata.find(el =>
            el.firstName.toLowerCase().trim() === formdata.assignto.toLowerCase().trim()
        );
    
        if (emp) {
            console.log("Employee found");
            // Push the new task
            emp.tasks.push(newtask);
    
            // Save updated data back to localStorage
            localStorage.setItem("employee", JSON.stringify(userdata));
    
            // Reset form
            setformdata({
                title: "",
                date: "",
                assignto: "",
                category: "",
                description: "",
            });
    
            console.log("Updated employee data:", userdata);
        } else {
            console.log("Employee not found");
        }
    };
    

    return (
        <div className="CreateTaskouter">
            <div className="CreateTaskinner">
                <form onSubmit={submithandle}>
                    <div className="innerleft">
                        <label htmlFor="Title">Task Title
                            <br />
                            <input type="text" id='Title' value={formdata.title}  name='title' onChange={changehandle} />
                        </label>

                        <label htmlFor="Date">Date
                            <br />
                            <input type="date" value={formdata.date}  name='date' onChange={changehandle} />
                        </label>

                        <label htmlFor="Assign">Assign to
                            <br />
                            <input type="text" id='Assign' value={formdata.assignto}  name='assignto' onChange={changehandle} />
                        </label>

                        <label htmlFor="Category">Category
                            <br />
                            <input type="text" id="Category" value={formdata.category}  name='category' onChange={changehandle} />
                        </label>
                    </div>

                    <div className="innerright">
                        <label htmlFor="textarea">Description
                            <br />
                            <textarea id="textarea" value={formdata.description} name='description'  onChange={changehandle}></textarea>
                        </label>
                        <button type="submit">Create Task</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateTask;
