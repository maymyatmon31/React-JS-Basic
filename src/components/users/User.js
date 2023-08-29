import React from 'react';

function User({user, remove}) {
    const handleRemove = () => {
        remove(user.uuid);
    }

    return (
        <div className='card'>
            <div className='row'>
            <div className='col-2'>
                <img src={user.image} width='50px' height='50px' />
            </div>
            <div className='col-2'>
                <strong>{user.name}</strong>
            </div>
            <div className='col-6'>
                <strong>Ph: {user.phone}</strong><br /> 
                <strong>Cell: {user.cell}</strong>
            </div>
            <div className='col-2'>
                <button className='btn btn-danger btn-sm mt-2' onClick={handleRemove}>
                    <i className='fa fa-trash'></i>
                </button>
            </div>



        </div>
        </div>)
}

export default User;
