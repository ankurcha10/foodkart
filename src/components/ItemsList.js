import React from 'react';
import { CDN_URL } from '../utils/constant';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const ItemsList = ({ items }) => {

  const dispatch = useDispatch()

  const handleAddItem = (item) => {
    // dispatch an action 
    dispatch(addItem(item))
  }
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 my-4 border border-gray-300 rounded-md shadow-md hover:shadow-lg flex items-center relative"
        >
          <div className="flex-grow">
            <div className="text-lg font-semibold">{item.card.info.name}</div>
            <div className="text-gray-600">₹ {item.card.info.price / 100 || item.card.info.defaultPrice/100}</div>
            <p className="text-sm text-gray-700 mt-2">{item.card.info.description}</p>
          </div>
          <div className="w-48 ml-4 relative">
            <div className="flex items-center">
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-16 h-16 object-cover rounded-full mr-2"
              />
              <button className="p-2 bg-black text-white shadow-md rounded-md" onClick={() => handleAddItem(item)}>Add +</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
