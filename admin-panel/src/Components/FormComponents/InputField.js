import React from 'react'

function InputField({ label, placeholder, type, id, name, required=false, value}) {
  return (
    <>
      <div className="mb-6">
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
        <input
          name={name}
          type={type}
          id={id}
          className="bg-gray-50 border outline-none text-gray-900 text-sm rounded-lg focus:border-blue-500 w-full p-2.5 "
          placeholder={placeholder}
          required={required}
          value={value}
        />
      </div>
    </>
  );
}

export default InputField
