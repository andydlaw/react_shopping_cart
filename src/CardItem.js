//import { useState } from 'react';
//UseState hook is used to store data

function CartItem(props) {
  //UseState method returns 2 items
  //it returns a value for the itemName variable
  //it also returns a function to modify that data called setItemName

  return (
    <div className="row mt-3">
      <div className="col-md-4">
        <input
          type="text"
          className="form-control"
          value={props.name}
          onChange={(evt) => props.onNameChange(evt)}
        />
      </div>

      <div className="col-md-2 text-center">
        <span>{props.qty}</span>
      </div>

      <div className="col-md-2">
        <button
          className="btn btn-primary rounded-5 align-middle border-black"
          onClick={(evt) => props.onQtyAdd(evt)}
        >
          <span>Add</span>
        </button>
      </div>
      <div className="col-md-2">
        <button
          className="btn btn-danger rounded-5 align-middle border-black"
          onClick={(evt) => props.onQtyRemove(evt)}
        >
          <span>Remove</span>
        </button>
      </div>
    </div>
  );
}
export default CartItem;
