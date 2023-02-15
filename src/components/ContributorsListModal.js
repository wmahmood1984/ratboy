import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ThemeContext } from "../context/themeContext";
import { IoCloseSharp } from "react-icons/io5";

export default function ContribotrsListModal({ open, handleClose }) {
  const { theme } = React.useContext(ThemeContext);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 500,
    width: "90%",
    bgcolor: theme === "dark" ? "#111721" : "#fff",
    boxShadow: 24,
    borderRadius: 2,
    color: theme === "light" ? "#111721" : "#fff",
  };
  const contributorList = [
    {
      address: "abc",
      value: 0.01,
    },
    {
      address: "acx",
      value: 0.02,
    },
    {
      address: "acx",
      value: 0.02,
    },
    {
      address: "acx",
      value: 0.02,
    },
    {
      address: "acx",
      value: 0.02,
    },
  ];
  const head = ["Address", "Value"];
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="  flex justify-between items-center p-3  border-b border-gray-600">
            <h2 className=" text-lg">All Contributors</h2>
            <button onClick={handleClose}>
              <IoCloseSharp className="text-2xl" />
            </button>
          </div>
          <div>
            <div className="p-4">
              <table className="p-4 w-full">
                <thead>
                  <tr>
                    {head.map((item, i) => (
                      <th
                        key={item}
                        className={`${i === 0 ? "text-left" : "text-right"}`}
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {contributorList.map((contributor, key) => (
                    <tr key={key}>
                      <td className="p-2 text-left">{contributor.address}</td>
                      <td className="p-2 text-right">{contributor.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
