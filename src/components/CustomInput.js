const CustomInput = ({ label, required = false, placeholder,value,setValue, ...props }) => {
  return (
    <div className="w-full ">
      {label && (
        <label className="mb-1 inline-block text-sm">
          {label}
          {required && <span className="text-red-400">*</span>}
        </label>
      )}
      <div
        className="dark:bg-dark-500 border border-lightDark rounded-md"
        style={{ height: "40px" }}
      >
        <input
          value={value}
          onChange={(e)=>{setValue(e.target.value)}}
          placeholder={placeholder}
          {...props}
          type="text"
          className=" bg-transparent  w-full h-full text-gray-500 p-2 py-2 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default CustomInput;
