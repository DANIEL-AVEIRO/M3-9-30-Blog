import React from "react";

const FormGroup = ({
  label,
  type,
  id,
  placeholder,
  htmlFor,
  onChange,
  value,
}) => {
  return (
    <div className="flex flex-col gap-2 mb-3">
      <label className="text-black text-lg" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="border border-solid border-black p-4 text-black rounded-md"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default FormGroup;
