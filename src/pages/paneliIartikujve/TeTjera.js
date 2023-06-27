import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";

const TeTjera = ({ disabled, setNdryshoKushtin }) => {
  // const [checked, setChecked] = useState(false);
  const [cities, setCities] = useState([]);

  const onCityChange = (e) => {
    let selectedCities = [...cities];

    if (e.checked) selectedCities.push(e.value);
    else selectedCities.splice(selectedCities.indexOf(e.value), 1);

    setCities(selectedCities);
  };

  return (
    <div className="flex gap-4">
      <div>
        <div className="border relative p-3">
          <spna
            className="absolute z-20"
            style={{
              color: "#1971c2",
              top: -14,
              backgroundColor: "white",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            Veprime ne shitje
          </spna>
          <div
            className="flex items-center"
            onClick={() => {
              if (disabled) {
                setNdryshoKushtin(true);
              } else {
                setNdryshoKushtin(false);
              }
            }}
          >
            <Checkbox
              disabled={disabled}
              inputId="cb2"
              value="I kthyeshem"
              onChange={onCityChange}
              checked={cities.includes("I kthyeshem")}
            ></Checkbox>
            <label
              label
              style={{ marginLeft: "5px", fontWeight: 500 }}
              htmlFor="cb2"
              className="p-checkbox-label"
            >
              I kthyeshem
            </label>
          </div>

          <span
            onClick={() => {
              if (disabled) {
                setNdryshoKushtin(true);
              } else {
                setNdryshoKushtin(false);
              }
            }}
            className="p-float-label mt-3 ml-4"
          >
            <InputText
              disabled={disabled}
              className="p-inputtext-sm block mb-2"
              placeholder="Periudha e kthimit"
              id="Periudha e kthimit"
            />
            <label htmlFor="username">Periudha e kthimit</label>
          </span>

          <span style={{ color: "#1971c2", fontWeight: 500 }}>Kostoja</span>

          <span
            onClick={() => {
              if (disabled) {
                setNdryshoKushtin(true);
              } else {
                setNdryshoKushtin(false);
              }
            }}
            className="p-float-label mt-3 ml-4"
          >
            <InputText
              disabled={disabled}
              className="p-inputtext-sm block mb-2"
              placeholder="Transport1"
              id="Transport1"
            />
            <label htmlFor="username">Transport1</label>
          </span>

          <span
            onClick={() => {
              if (disabled) {
                setNdryshoKushtin(true);
              } else {
                setNdryshoKushtin(false);
              }
            }}
            className="p-float-label mt-3 ml-4"
          >
            <InputText
              disabled={disabled}
              className="p-inputtext-sm block mb-2 "
              placeholder="Transport2"
              id="Transport2"
            />
            <label htmlFor="username">Transport2</label>
          </span>

          <span
            onClick={() => {
              if (disabled) {
                setNdryshoKushtin(true);
              } else {
                setNdryshoKushtin(false);
              }
            }}
            className="p-float-label mt-3 ml-4"
          >
            <InputText
              disabled={disabled}
              className="p-inputtext-sm block mb-2"
              placeholder="Transport3"
              id="Transport3"
            />
            <label htmlFor="username">Transport3</label>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex border relative p-2 gap-3">
          <span
            className="absolute z-20"
            style={{
              color: "#1971c2",
              top: -14,
              fontWeight: 500,
              backgroundColor: "white",
              fontSize: "14px",
            }}
          >
            Te tjera
          </span>
          <div className="mt-2">
            <div
              onClick={() => {
                if (disabled) {
                  setNdryshoKushtin(true);
                } else {
                  setNdryshoKushtin(false);
                }
              }}
              className="flex items-center"
            >
              <Checkbox
                disabled={disabled}
                inputId="cb1"
                value="Artikull i ri"
                onChange={onCityChange}
                checked={cities.includes("Artikull i ri")}
              ></Checkbox>
              <label
                label
                style={{ marginLeft: "5px", fontWeight: 500 }}
                htmlFor="cb2"
                className="p-checkbox-label"
              >
                Artikull i ri
              </label>
            </div>

            <div
              onClick={() => {
                if (disabled) {
                  setNdryshoKushtin(true);
                } else {
                  setNdryshoKushtin(false);
                }
              }}
              className="flex items-center"
            >
              <Checkbox
                disabled={disabled}
                inputId="cb1"
                value="Eksport"
                onChange={onCityChange}
                checked={cities.includes("Eksport")}
              ></Checkbox>
              <label
                label
                style={{ marginLeft: "5px", fontWeight: 500 }}
                htmlFor="cb2"
                className="p-checkbox-label"
              >
                Eksport
              </label>
            </div>

            <div
              onClick={() => {
                if (disabled) {
                  setNdryshoKushtin(true);
                } else {
                  setNdryshoKushtin(false);
                }
              }}
              className="flex items-center"
            >
              <Checkbox
                disabled={disabled}
                inputId="cb1"
                value="Import"
                onChange={onCityChange}
                checked={cities.includes("Import")}
              ></Checkbox>
              <label
                label
                style={{ marginLeft: "5px", fontWeight: 500 }}
                htmlFor="cb2"
                className="p-checkbox-label"
              >
                Import
              </label>
            </div>
          </div>
          <div className="mt-2">
            <div
              onClick={() => {
                if (disabled) {
                  setNdryshoKushtin(true);
                } else {
                  setNdryshoKushtin(false);
                }
              }}
              className="flex items-center"
            >
              <Checkbox
                disabled={disabled}
                inputId="cb1"
                value="Franchise"
                onChange={onCityChange}
                checked={cities.includes("Franchise")}
              ></Checkbox>
              <label
                label
                style={{ marginLeft: "5px", fontWeight: 500 }}
                htmlFor="cb2"
                className="p-checkbox-label"
              >
                Franchise
              </label>
            </div>
            <div
              onClick={() => {
                if (disabled) {
                  setNdryshoKushtin(true);
                } else {
                  setNdryshoKushtin(false);
                }
              }}
              className="flex items-center"
            >
              <Checkbox
                inputId="cb1"
                value="STK"
                onChange={onCityChange}
                checked={cities.includes("STK")}
              ></Checkbox>
              <label
                label
                style={{ marginLeft: "5px", fontWeight: 500 }}
                htmlFor="cb2"
                className="p-checkbox-label"
              >
                STK
              </label>
            </div>
            <div
              onClick={() => {
                if (disabled) {
                  setNdryshoKushtin(true);
                } else {
                  setNdryshoKushtin(false);
                }
              }}
              className="flex items-center"
            >
              <Checkbox
                disabled={disabled}
                inputId="cb1"
                value="Nuk copetohet"
                onChange={onCityChange}
                checked={cities.includes("Nuk copetohet")}
              ></Checkbox>
              <label
                label
                style={{ marginLeft: "5px", fontWeight: 500 }}
                htmlFor="cb2"
                className="p-checkbox-label"
              >
                Nuk copetohet
              </label>
            </div>
          </div>
        </div>

        <div className="border p-2">
          <span
            className="absolute z-20"
            style={{
              color: "#1971c2",
              backgroundColor: "white",
              top: 168,
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Lajmero per date skadence
          </span>
          <div>
            <span
              onClick={() => {
                if (disabled) {
                  setNdryshoKushtin(true);
                } else {
                  setNdryshoKushtin(false);
                }
              }}
              className="p-float-label mt-4 ml-4"
            >
              <InputText
                disabled={disabled}
                className="p-inputtext-sm block mb-2"
                type="number"
                placeholder="Dite para skadimit"
                id="Dite para skadimit"
              />
              <label className="z-20" htmlFor="username">
                Dite para skadimit
              </label>
            </span>
          </div>
        </div>

        <div className="border p-2">
          <span
            className="absolute z-20"
            style={{
              color: "#1971c2",
              backgroundColor: "white",
              top: 250,
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Lajmero kur gjendja kalo sasine
          </span>
          <div className="flex justify-center">
            <span
              onClick={() => {
                if (disabled) {
                  setNdryshoKushtin(true);
                } else {
                  setNdryshoKushtin(false);
                }
              }}
              className="p-float-label mt-3 ml-4"
            >
              <InputText
                disabled={disabled}
                className="p-inputtext-sm block mb-2"
                type="number"
                placeholder="Min"
                id="Min"
              />
              <label className="z-20" htmlFor="username">
                Min
              </label>
            </span>
            <span
              onClick={() => {
                if (disabled) {
                  setNdryshoKushtin(true);
                } else {
                  setNdryshoKushtin(false);
                }
              }}
              className="p-float-label mt-3 ml-4"
            >
              <InputText
                disabled={disabled}
                className="p-inputtext-sm block mb-2"
                type="number"
                placeholder="Max"
                id="Max"
              />
              <label className="z-20" htmlFor="username">
                Max
              </label>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeTjera;
