import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function FormField() {
    return (
        <div className="d-flex justify-content-center">
            <form className="my-5">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                    Movie Name
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                    Review
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    />
                </div>
                <button type="submit" className="btn btn-success">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default FormField;