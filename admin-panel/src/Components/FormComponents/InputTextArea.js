import React from 'react'

function InputTextArea({label, placeholder, rows=6, id, name, required=false, value}) {
  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
      <textarea
        name={name}
        rows={rows}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required={required}
        value={value}
      />
    </div>
  );
}

export default InputTextArea
