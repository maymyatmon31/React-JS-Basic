import React, { useState } from "react";


function AddUser(props) {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [cell, setCell] = useState('');
    const [uuid, setUuid] = useState('');

    const imageChangeHandler = (event) => {
        setImage(event.target.value);
    }
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }
    const phoneChangeHandler = (event) => {
        setPhone(event.target.value);
    }
    const cellChangeHandler = (event) => {
        setCell(event.target.value);
    }
    const uuidChangeHandler = (event) => {
        setUuid(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        let user = {
            name: name,
            image: image,
            phone: phone,
            cell: cell,
            uuid: uuid,
        };
        props.addUser(user);
    }


    return (
        <div className="container mb-3">
            <form onSubmit={submitHandler}>
            <div className="mb-3">
                    <label htmlFor="image" className="form-label text-info">Image</label>
                    <input type="text" className="form-control" id="image" onChange={imageChangeHandler}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label text-info">Name</label>
                    <input type="text" className="form-control" id="name" onChange={nameChangeHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label text-info">Phone</label>
                    <input type="tel" className="form-control" id="phone" onChange={phoneChangeHandler}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cell" className="form-label text-info">Cell</label>
                    <input type="tel" className="form-control" id="cell" onChange={cellChangeHandler}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="uuid" className="form-label text-info">Uuid</label>
                    <input type="text" className="form-control" id="uuid" onChange={uuidChangeHandler}/>
                </div>
                <div className="mb-3 form-check">
                    <input htmlFor="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button htmlFor="submit" className="btn btn-primary">Create</button>
            </form>

        </div>
    )
}

export default AddUser;