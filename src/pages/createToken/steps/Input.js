export const CustomInput = ({ placeholder,value,setValue }) => {
    return (
      <div
        className="bg-dark-500 border border-lightDark rounded-md"
        style={{ height: "56px" }}
      >
        <input
          placeholder={placeholder}
          value={value}
          onChange={(e)=>{setValue(e.target.value)}}
          type="text"
          className=" bg-transparent w-full h-full text-gray-500 p-2"
        />
      </div>
    );
  };
  
export const CustomInputWithLabel = ({
    label = "Hardcap (BNB)",
    required,
    placeholder = "0",
    value,
    setValue
  }) => {
    return (
      <div>
        <p>
          {label}
          {required && <span className="text-red-400">*</span>}
        </p>
        <CustomInput value={value} setValue={setValue} placeholder={placeholder} />
      </div>
    );
  };