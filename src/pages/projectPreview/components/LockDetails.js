import React from "react";

const LockDetails = () => {
  const head = ["Amount", "Unlock time(UTC)", ""];
  const data = [
    {
      amount: 8000,
      time: "2023.04.01 10:04",
      link: "",
    },
    {
      amount: 8000,
      time: "2023.04.01 10:04",
      link: "",
    },
    {
      amount: 8000,
      time: "2023.04.01 10:04",
      link: "",
    },
  ];
  return (
    <div className=" bg-white  md:col-span-7 dark:bg-dark-400 border dark:border-lightDark rounded-md shadow-xl ">
      <div className=" border-b  border-lightDark px-4 py-4 flex justify-between items-center">
        <p>Lock records</p>
        <a href="/" className="text-primary-400">
          View All
        </a>
      </div>
      <div className="p-4 ">
        <table className="w-full ">
          <thead>
            <tr>
              {head.map((val, i) => (
                <th key={i} className=" font-bold text-left">
                  {val}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((val, i) => (
              <tr key={i} className=" border-b border-lightDark">
                <td className="py-2 pl-2 ">{val.amount}</td>
                <td className="py-2 pl-2 ">{val.time}</td>
                <td className="py-2 pl-2 ">
                  <a className="text-primary-400 text-right block" href="/">
                    view{" "}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LockDetails;
