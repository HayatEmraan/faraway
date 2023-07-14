import React from "react";

const Footer = ({ listPackages, checkedData }) => {
  return (
    <h1 className="footer">
      {listPackages.length !== 0
        ? listPackages.length === checkedData.length
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${
              listPackages.length
            } items on your list, and you already packed ${
              checkedData.length
            } (${((100 / listPackages.length) * checkedData.length).toFixed(
              2
            )}%)`
        : "Start adding some items to your packing list 🚀"}
    </h1>
  );
};

export default Footer;
