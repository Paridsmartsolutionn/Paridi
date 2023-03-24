import React from "react";
import { Panel } from "primereact/panel";
import { Ripple } from "primereact/ripple";
import "./PhoneFatureBlerje.scss";
const PhoneFatureBlerje = () => {
  const template = (options) => {
    const toggleIcon = options.collapsed
      ? "pi pi-chevron-down"
      : "pi pi-chevron-up";
    const className = `${options.className} justify-content-start`;
    const titleClassName = `${options.titleClassName} pl-1`;

    return (
      <div className={className}>
        <button
          className={options.togglerClassName}
          onClick={options.onTogglerClick}
        >
          <span className={toggleIcon}></span>
          <Ripple />
        </button>
        <span className={titleClassName}>Fature Blerje</span>
      </div>
    );
  };
  return (
    <div className="phone-container">
      <Panel headerTemplate={template} toggleable></Panel>
    </div>
  );
};

export default PhoneFatureBlerje;
