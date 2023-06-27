import React, { useState } from "react";
// import AddIcon from '@mui/icons-material/Add';
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
// import { Dropdown } from 'primereact/dropdown';
import Grupi from "./MiniModalArtikuj/Tepergjithshme/Grupi";
import Form from "react-bootstrap/Form";
import Skema from "./MiniModalArtikuj/Tepergjithshme/Skema";
import Tarifat from "./MiniModalArtikuj/Tepergjithshme/Tarifat";
import Njesia from "./MiniModalArtikuj/Tepergjithshme/Njesia";

const TePergjithshme = ({
  data,
  selektTarifa,
  setSelektTarifa,
  selektSkema,
  setSelektSkema,
  setSelektGrup,
  selektGrup,
  selektNjesia,
  setSelektNjesia,
  setNdryshoKushtin,
  disabled,
}) => {
  // const [checked, setChecked] = useState(false);
  const [cities, setCities] = useState([]);

  const onCityChange = (e) => {
    let selectedCities = [...cities];

    if (e.checked) selectedCities.push(e.value);
    else selectedCities.splice(selectedCities.indexOf(e.value), 1);

    setCities(selectedCities);
  };

  return (
    <div className="flex">
      <div className="flex gap-3 border p-2">
        <div>
          <span
            onClick={() => {
              if (disabled) {
                setNdryshoKushtin(true);
              } else {
                setNdryshoKushtin(false);
              }
            }}
            className="p-float-label mb-4"
          >
            <InputText
              onClick={() => {
                setNdryshoKushtin(true);
              }}
              disabled={disabled}
              className="p-inputtext-sm block mb-2"
              placeholder="Kodi"
              id="Kodi"
            />
            <label htmlFor="username">Kodi</label>
          </span>

          <span
            onClick={() => {
              if (disabled) {
                setNdryshoKushtin(true);
              } else {
                setNdryshoKushtin(false);
              }
            }}
            className="p-float-label mt-4"
          >
            <InputText
              onClick={() => {
                setNdryshoKushtin(true);
              }}
              disabled={disabled}
              className="p-inputtext-sm block mb-2"
              placeholder="Bar Kodi"
              id="Bar Kodi"
            />
            <label htmlFor="username">Bar Kodi</label>
          </span>
        </div>

        <div>
          <span
            onClick={() => {
              if (disabled) {
                setNdryshoKushtin(true);
              } else {
                setNdryshoKushtin(false);
              }
            }}
            className="p-float-label mb-4"
          >
            <InputText
              onClick={() => {
                setNdryshoKushtin(true);
              }}
              disabled={disabled}
              className="p-inputtext-sm block mb-2"
              placeholder="Kodi 1"
              id="Kodi 1"
            />
            <label htmlFor="username">Kodi 1</label>
          </span>

          <span
            onClick={() => {
              if (disabled) {
                setNdryshoKushtin(true);
              } else {
                setNdryshoKushtin(false);
              }
            }}
            className="p-float-label mt-4"
          >
            <InputText
              onClick={() => {
                setNdryshoKushtin(true);
              }}
              disabled={disabled}
              className="p-inputtext-sm block mb-2"
              placeholder="Pershkrim"
              id="Pershkrim"
            />
            <label htmlFor="username">Pershkrim</label>
          </span>
        </div>

        <div>
          <span
            onClick={() => {
              if (disabled) {
                setNdryshoKushtin(true);
              } else {
                setNdryshoKushtin(false);
              }
            }}
            className="p-float-label mb-4"
          >
            <InputText
              onClick={() => {
                setNdryshoKushtin(true);
              }}
              disabled={disabled}
              className="p-inputtext-sm block mb-2"
              placeholder="Fjale Kyce"
              id="Fjale Kyce"
            />
            <label label htmlFor="username">
              Fjale Kyce
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
            className="p-float-label mt-4"
          >
            <InputText
              onClick={() => {
                setNdryshoKushtin(true);
              }}
              disabled={disabled}
              className="p-inputtext-sm block mb-2"
              placeholder="Cmimi Bleres"
              id="Cmimi Bleres"
            />
            <label htmlFor="username">Cmimi Bleres</label>
          </span>
        </div>

        <div>
          <span
            onClick={() => {
              if (disabled) {
                setNdryshoKushtin(true);
              } else {
                setNdryshoKushtin(false);
              }
            }}
            className="p-float-label mb-4"
          >
            <InputText
              onClick={() => {
                setNdryshoKushtin(true);
              }}
              disabled={disabled}
              className="p-inputtext-sm block mb-2"
              placeholder="Cmimi Shites"
              id="Cmimi Shites"
            />
            <label htmlFor="username">Cmimi Shites</label>
          </span>

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
            <Form.Select
              onClick={() => {
                setNdryshoKushtin(true);
              }}
              disabled={disabled}
              size="sm"
              className=""
              value={selektNjesia}
              onChange={(e) => {
                setSelektNjesia(e.target.value);
              }}
            >
              <option label="Njesia" />
              {data?.Njesia?.map((list) => {
                return (
                  <option className="selekt" value={list.Kodi}>
                    {list?.Pershkrim}
                  </option>
                );
              })}
            </Form.Select>

            <span
              className="flex items-center"
              style={{
                border: "solid 1px #ddd",
                backgroundColor: "#1971c2",
                color: "#fff",
              }}
            >
              <Njesia
                selektNjesia={selektNjesia}
                setSelektNjesia={setSelektNjesia}
              />
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <div
            onClick={() => {
              if (disabled) {
                setNdryshoKushtin(true);
              } else {
                setNdryshoKushtin(false);
              }
            }}
            className="flex items-center w-full"
          >
            <Form.Select
              onClick={() => {
                setNdryshoKushtin(true);
              }}
              disabled={disabled}
              size="sm"
              className=""
              value={selektGrup}
              onChange={(e) => {
                setSelektGrup(e.target.value);
              }}
            >
              <option label="Grup" />
              {data.Art_Klasifikim1?.map((list) => {
                return <option value={list?.Kodi}>{list?.Pershkrim}</option>;
              })}
            </Form.Select>

            <span
              className="flex items-center"
              style={{
                border: "solid 1px #ddd",
                backgroundColor: "#1971c2",
                color: "#fff",
              }}
            >
              <Grupi setSelektGrup={setSelektGrup} selektGrup={selektGrup} />
            </span>
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
            <Form.Select
              onClick={() => {
                setNdryshoKushtin(true);
              }}
              disabled={disabled}
              size="sm"
              className=""
              value={selektSkema}
              onChange={(e) => {
                setSelektSkema(e.target.value);
              }}
            >
              <option label="Skema" />
              {data.Skema_Llogari?.map((list) => {
                return <option value={list?.Kodi}>{list?.Pershkrim}</option>;
              })}
            </Form.Select>

            <span
              className="flex items-center"
              style={{
                border: "solid 1px #ddd",
                backgroundColor: "#1971c2",
                color: "#fff",
              }}
            >
              <Skema
                data={data}
                selektSkema={selektSkema}
                setSelektSkema={setSelektSkema}
              />
            </span>
          </div>

          <div
            onClick={() => {
              if (disabled) {
                setNdryshoKushtin(true);
              } else {
                setNdryshoKushtin(false);
              }
            }}
            className="flex items-center w-full"
          >
            <Form.Select
              disabled={disabled}
              size="sm"
              className=""
              value={selektTarifa}
              onChange={(e) => {
                setSelektTarifa(e.target.value);
              }}
            >
              <option label="Tarifa" />
              {data.Tarifa?.map((list) => {
                return <option value={list?.Kodi}>{list?.Pershkrim}</option>;
              })}
            </Form.Select>

            <span
              className="flex items-center"
              style={{
                border: "solid 1px #ddd",
                backgroundColor: "#1971c2",
                color: "#fff",
              }}
            >
              <Tarifat selektTarifa={selektTarifa} />
            </span>
          </div>

          <div></div>
        </div>
      </div>

      <div id="resizeMe" className="flex gap-3 resizable">
        <div className="border ml-6 relative p-2">
          <span
            className="absolute z-10"
            style={{
              bottom: 161,
              left: 70,
              color: "#1971c2",
              backgroundColor: "white",
            }}
          >
            Kodet
          </span>
          <span
            onClick={() => {
              if (disabled) {
                setNdryshoKushtin(true);
              } else {
                setNdryshoKushtin(false);
              }
            }}
            className="p-float-label mb-4"
          >
            <InputText
              disabled={disabled}
              className="p-inputtext-sm block mb-2"
              placeholder="Kodi2"
              id="Kodi2"
            />
            <label htmlFor="username">Kodi2</label>
          </span>

          <span
            onClick={() => {
              if (disabled) {
                setNdryshoKushtin(true);
              } else {
                setNdryshoKushtin(false);
              }
            }}
            className="p-float-label mb-4"
          >
            <InputText
              disabled={disabled}
              className="p-inputtext-sm block mb-2"
              placeholder="Kodi3"
              id="Kodi3"
            />
            <label htmlFor="username">Kodi3</label>
          </span>

          <span
            onClick={() => {
              if (disabled) {
                setNdryshoKushtin(true);
              } else {
                setNdryshoKushtin(false);
              }
            }}
            className="p-float-label mb-4"
          >
            <InputText
              disabled={disabled}
              className="p-inputtext-sm block mb-2"
              placeholder="Kodi4"
              id="Kodi4"
            />
            <label htmlFor="username">Kodi4</label>
          </span>

          <span
            onClick={() => {
              if (disabled) {
                setNdryshoKushtin(true);
              } else {
                setNdryshoKushtin(false);
              }
            }}
            className="p-float-label mb-4"
          >
            <InputText
              disabled={disabled}
              className="p-inputtext-sm block mb-2"
              placeholder="Kodi5"
              id="Kodi5"
            />
            <label htmlFor="username">Kodi5</label>
          </span>
        </div>

        <div className="flex flex-col">
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
              value="Aktiv"
              onChange={onCityChange}
              checked={cities.includes("Aktiv")}
            ></Checkbox>
            <label
              style={{ color: "#1971c2", marginLeft: "5px" }}
              htmlFor="cb2"
              className="p-checkbox-label"
            >
              Aktiv
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
              inputId="cb3"
              value="Shumice"
              onChange={onCityChange}
              checked={cities.includes("Shumice")}
            ></Checkbox>
            <label
              style={{ color: "#1971c2", marginLeft: "5px" }}
              htmlFor="cb4"
              className="p-checkbox-label"
            >
              Shumice
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
              inputId="cb5"
              value="Pakice"
              onChange={onCityChange}
              checked={cities.includes("Pakice")}
            ></Checkbox>
            <label
              style={{ color: "#1971c2", marginLeft: "5px" }}
              htmlFor="cb6"
              className="p-checkbox-label"
            >
              Pakice
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
              inputId="cb7"
              value="Pos Bar"
              onChange={onCityChange}
              checked={cities.includes("Pos Bar")}
            ></Checkbox>
            <label
              style={{ color: "#1971c2", marginLeft: "5px" }}
              htmlFor="cb8"
              className="p-checkbox-label"
            >
              Pos Bar
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
          >
            <Checkbox
              disabled={disabled}
              inputId="cb9"
              value="Distribucion"
              onChange={onCityChange}
              checked={cities.includes("Distribucion")}
            ></Checkbox>
            <label
              style={{ color: "#1971c2", marginLeft: "5px" }}
              htmlFor="cb10"
              className="p-checkbox-label"
            >
              Distribucion
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
              inputId="cb11"
              value="AAM"
              onChange={onCityChange}
              checked={cities.includes("AAM")}
            ></Checkbox>
            <label
              style={{ color: "#1971c2", marginLeft: "5px" }}
              htmlFor="cb12"
              className="p-checkbox-label"
            >
              AMM
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TePergjithshme;
