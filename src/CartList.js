import CartItem from './CardItem';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import _ from 'lodash';

function CartList() {
  const [items, setItems] = useState([
    { id: nanoid(), name: 'Hat', qty: 2 },
    { id: nanoid(), name: 'Tie', qty: 3 },
    { id: nanoid(), name: 'Belt', qty: 1 },
  ]);

  function onNameChange(evt, item) {
    const newName = evt.currentTarget.value;
    setItems(
      _.map(items, (x) => (x.id === item.id ? { ...x, name: newName } : x))
    );
  }

  function onQtyAdd(evt, item) {
    setItems(
      _.map(items, (x) => (x.id === item.id ? { ...x, qty: ++x.qty } : x))
    );
  }

  function onQtyRemove(evt, item) {
    const newQty = item.qty - 1;

    if (newQty > 0) {
      setItems(
        _.map(items, (x) => (x.id === item.id ? { ...x, qty: --x.qty } : x))
      );
    } else {
      setItems(_.filter(items, (x) => x.id !== item.id));
    }
  }

  let itemCount = 0;

  for (const item of items) {
    if (item && item.qty) {
      itemCount += item.qty;
    }
  }

  return (
    <>
      <div className="container">
        {itemCount <= 0 && (
          <div className="textEmpty">
            Your cart is empty! Add some items to it!
          </div>
        )}
        <h1>
          Shopping Cart{' '}
          {itemCount > 0 && (
            <span className="badge rounded-pill text-bg-primary border-black">
              {itemCount}
            </span>
          )}
        </h1>

        <button
          className="btn btn-lg btn-primary"
          onClick={(evt) =>
            setItems([...items, { id: nanoid(), name: '', qty: 1 }])
          }
        >
          Add Item
        </button>
        {items.map((item) => (
          <CartItem
            name={item.name}
            qty={item.qty}
            key={item.id}
            onNameChange={(evt) => onNameChange(evt, item)}
            onQtyAdd={(evt) => onQtyAdd(evt, item)}
            onQtyRemove={(evt) => onQtyRemove(evt, item)}
          />
        ))}
      </div>
    </>
  );
}

export default CartList;
