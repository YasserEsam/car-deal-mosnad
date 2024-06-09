import React, { useState } from 'react';

const Modal = ({ show, handleClose, title, handleSave }) => {
  if (!show) return null;

  const [carData, setCarData] = useState({
    title: '',
    price: '',
    company: '',
    model: '',
    year: '',
    condition: '',
    gear: '',
    avacolors: [],
    MPG: '',
    seats: '',
    desc: '',
    image: '',
    images: [],
    sellerName: '',
    sellerContact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData({ ...carData, [name]: value });
  };

  const handleColorChange = (index, value) => {
    const newColors = [...carData.avacolors];
    newColors[index] = value;
    setCarData({ ...carData, avacolors: newColors });
  };

  const addColorInput = () => {
    setCarData({ ...carData, avacolors: [...carData.avacolors, '#000000'] });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setCarData({ ...carData, images: files });
  };

  const handleSubmit = () => {
    handleSave(carData);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg overflow-auto shadow-xl w-11/12 md:w-1/3 max-h-full">
        <div className="px-4 py-2 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={handleClose} className="text-gray-700">
            &times;
          </button>
        </div>
        <div className="p-4 overflow-y-auto max-h-96">
          <form className="space-y-4">
            {['title', 'price', 'company', 'model', 'year', 'MPG', 'seats', 'desc', 'sellerName', 'sellerContact'].map(field => (
              <div key={field} className="flex flex-col">
                <label className="mb-1 capitalize">{field}</label>
                <input
                  type={field === 'price' || field === 'MPG' || field === 'year' || field === 'seats' ? 'number' : 'text'}
                  name={field}
                  value={carData[field]}
                  onChange={handleChange}
                  className="p-2 border rounded"
                />
              </div>
            ))}

            <div className="flex flex-col">
              <label className="mb-1 capitalize">condition</label>
              <select name="condition" value={carData.condition} onChange={handleChange} className="p-2 border rounded">
                <option value="">Select Condition</option>
                <option value="New">New</option>
                <option value="Used">Used</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-1 capitalize">gear</label>
              <div className="flex space-x-4">
                <label>
                  <input
                    type="radio"
                    name="gear"
                    value="Automatic"
                    checked={carData.gear === 'Automatic'}
                    onChange={handleChange}
                  />
                  Automatic
                </label>
                <label>
                  <input
                    type="radio"
                    name="gear"
                    value="Manual"
                    checked={carData.gear === 'Manual'}
                    onChange={handleChange}
                  />
                  Manual
                </label>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="mb-1 capitalize">available colors</label>
              <div className="flex space-x-2">
                {carData.avacolors.map((color, index) => (
                  <div key={index} className="relative">
                    <input
                      type="color"
                      value={color}
                      onChange={(e) => handleColorChange(index, e.target.value)}
                      className="p-2 border rounded"
                    />
                    <div
                      className="absolute top-0 left-0 w-6 h-6 rounded-full"
                      style={{ backgroundColor: color }}
                    ></div>
                  </div>
                ))}
              </div>
              <button type="button" onClick={addColorInput} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
                Add Color
              </button>
            </div>

            <div className="flex flex-col">
              <label className="mb-1 capitalize">upload images</label>
              <input
                type="file"
                multiple
                onChange={handleImageChange}
                className="p-2 border rounded"
              />
            </div>
          </form>
        </div>
        <div className="px-4 py-2 border-t flex justify-end space-x-2">
          <button onClick={handleClose} className="bg-gray-500 text-white px-4 py-2 rounded-md">
            Close
          </button>
          <button onClick={handleSubmit} className="bg-indigo-500 text-white px-4 py-2 rounded-md">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
