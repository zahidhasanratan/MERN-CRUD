import React from "react";

const CreateForm = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 p-2">
          <label>Product Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-4 p-2">
          <label>Product Code</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-4 p-2">
          <label>Image</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-4 p-2">
          <label>Unit Price</label>
          <input type="number" className="form-control" />
        </div>
        <div className="col-md-4 p-2">
          <label>QTY</label>
          <input type="number" className="form-control" />
        </div>
        <div className="col-md-4 p-2">
          <label>Total Price</label>
          <input type="number" className="form-control" />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-4 p-2">
          <button className="btn btn-primary w-100">Save</button>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
