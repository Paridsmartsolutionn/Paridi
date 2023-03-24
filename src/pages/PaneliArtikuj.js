import React, { useState, useEffect } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import TePergjithshme from "./paneliIartikujve/TePergjithshme";
import Cmime from "./paneliIartikujve/Cmime";
import Barkode from "./paneliIartikujve/Barkode";
import Njesi from "./paneliIartikujve/Njesi";
import Klasifikime from "./paneliIartikujve/Klasifikime";
import Receptura from "./paneliIartikujve/Receptura";
import Procese from "./paneliIartikujve/Procese";
import EtiketaFoto from "./paneliIartikujve/EtiketaFoto";
import Oferte from "./paneliIartikujve/Oferte";
import TeTjera from "./paneliIartikujve/TeTjera";
import Asetet from "./paneliIartikujve/Asetet";
import axios from "axios";

const PaneliArtikuj = ({ disabled, setNdryshoKushtin, ndryshoKushtin }) => {
  const [data, setData] = useState([]);

  const [selektGrup, setSelektGrup] = useState([]);
  const [selektSkema, setSelektSkema] = useState([]);
  const [selektTarifa, setSelektTarifa] = useState([]);
  const [selektOrigjina, setSelekOrigjina] = useState([]);
  const [selektMarka, setSelektMarka] = useState([]);
  const [selektGjinia, setSelektGjinia] = useState([]);
  const [selektSezoni, setSelektSezoni] = useState([]);
  const [selektLlojiMallit, setSelektLlojiMallit] = useState([]);
  const [selektCilesia, setSelektCilesia] = useState([]);
  const [selektNjesia, setSelektNjesia] = useState([]);
  const [selektNgjyra, setSelektNgjyra] = useState([]);
  const [selektMasa, setSelektMasa] = useState([]);
  const [selektMateriali, setSelektMateriali] = useState([]);

  const [selektKls2, setSelektKls2] = useState([]);
  const [selektKls3, setSelektKls3] = useState([]);
  const [selektKls4, setSelektKls4] = useState([]);
  const [selektKls5, setSelektKls5] = useState([]);
  const [selektKls6, setSelektKls6] = useState([]);

  const [selektAAmKlasifkim1, setSelektAAmKlasifikim1] = useState([]);
  const [selektAAmKlasifkim2, setSelektAAmKlasifikim2] = useState([]);
  const [selektAAmKlasifkim3, setSelektAAmKlasifikim3] = useState([]);

  const [selektVlereShitje, setSelektVlereShitje] = useState([]);
  const [selektVlereBlerje, setSelektVlereBlerje] = useState([]);
  const [selektVlereImport, setSelektVlereImport] = useState([]);

  console.log({ data });
  console.log({ dd: selektVlereShitje.Tip_Vlere_Shitje });

  const fetchPost = async () => {
    try {
      const response = await axios(`${process.env.REACT_APP_API_KEY}/artikuj/`);
      setData(response.data);
      setSelektGrup(response.data);
      setSelektSkema(response.data);
      setSelektTarifa(response.data);
      setSelekOrigjina(response.data);
      setSelektMarka(response.data);
      setSelektGjinia(response.data);
      setSelektSezoni(response.data);
      setSelektLlojiMallit(response.data);
      setSelektCilesia(response.data);
      setSelektNgjyra(response.data);
      setSelektMasa(response.data);
      setSelektMateriali(response.data);
      setSelektNjesia(response.data);
      setSelektKls2(response.data);
      setSelektKls3(response.data);
      setSelektKls4(response.data);
      setSelektKls5(response.data);
      setSelektKls6(response.data);
      setSelektVlereShitje(response.data);
      setSelektVlereBlerje(response.data);
      setSelektVlereImport(response.data);

      setSelektVlereImport(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="card">
      <TabView>
        <TabPanel header="Te Pergjithshme">
          <TePergjithshme
            ndryshoKushtin={ndryshoKushtin}
            setNdryshoKushtin={setNdryshoKushtin}
            disabled={disabled}
            data={data}
            selektTarifa={selektTarifa}
            setSelektTarifa={setSelektTarifa}
            selektSkema={selektSkema}
            setSelektSkema={setSelektSkema}
            setSelektGrup={setSelektGrup}
            selektGrup={selektGrup}
            selektNjesia={selektNjesia}
            setSelektNjesia={setSelektNjesia}
          />
        </TabPanel>

        <TabPanel header="Cmime">
          <Cmime
            ndryshoKushtin={ndryshoKushtin}
            setNdryshoKushtin={setNdryshoKushtin}
            disabled={disabled}
            data={data}
            selektTarifa={selektTarifa}
            setSelektTarifa={setSelektTarifa}
          />
        </TabPanel>

        <TabPanel header="Barkode">
          <Barkode
            setNdryshoKushtin={setNdryshoKushtin}
            disabled={disabled}
            data={data}
            selektOrigjina={selektOrigjina}
            setSelekOrigjina={setSelekOrigjina}
            selektMarka={selektMarka}
            setSelektMarka={setSelektMarka}
            selektGjinia={selektGjinia}
            setSelektGjinia={setSelektGjinia}
            selektSezoni={selektSezoni}
            setSelektSezoni={setSelektSezoni}
            selektLlojiMallit={selektLlojiMallit}
            setSelektLlojiMallit={setSelektLlojiMallit}
            selektCilesia={selektCilesia}
            setSelektCilesia={setSelektCilesia}
            selektNgjyra={selektNgjyra}
            setSelektNgjyra={setSelektNgjyra}
            selektMasa={selektMasa}
            setSelektMasa={setSelektMasa}
            selektMateriali={selektMateriali}
            setSelektMateriali={setSelektMateriali}
          />
        </TabPanel>

        <TabPanel header="Njesi">
          <Njesi setNdryshoKushtin={setNdryshoKushtin} disabled={disabled} />
        </TabPanel>

        <TabPanel header="Klasifikime">
          <Klasifikime
            setNdryshoKushtin={setNdryshoKushtin}
            disabled={disabled}
            selektKls2={selektKls2}
            setSelektKls2={setSelektKls2}
            selektKls3={selektKls3}
            setSelektKls3={setSelektKls3}
            selektKls4={selektKls4}
            setSelektKls4={setSelektKls4}
            selektKls5={selektKls5}
            setSelektKls5={setSelektKls5}
            selektKls6={selektKls6}
            setSelektKls6={setSelektKls6}
            selektVlereShitje={selektVlereShitje}
            setSelektVlereShitje={setSelektVlereShitje}
            selektOrigjina={selektOrigjina}
            setSelekOrigjina={setSelekOrigjina}
            selektVlereBlerje={selektVlereBlerje}
            setSelektVlereBlerje={setSelektVlereBlerje}
            selektVlereImport={selektVlereImport}
            setSelektVlereImport={setSelektVlereImport}
            selektMarka={selektMarka}
            setSelektMarka={setSelektMarka}
            selektGjinia={selektGjinia}
            setSelektGjinia={setSelektGjinia}
            selektSezoni={selektSezoni}
            setSelektSezoni={setSelektSezoni}
            selektLlojiMallit={selektLlojiMallit}
            setSelektLlojiMallit={setSelektLlojiMallit}
            selektCilesia={selektCilesia}
            setSelektCilesia={setSelektCilesia}
            selektNgjyra={selektNgjyra}
            setSelektNgjyra={setSelektNgjyra}
            selektMasa={selektMasa}
            setSelektMasa={setSelektMasa}
            selektMateriali={selektMateriali}
            setSelektMateriali={setSelektMateriali}
          />
        </TabPanel>

        <TabPanel header="Receptura">
          <Receptura
            setNdryshoKushtin={setNdryshoKushtin}
            disabled={disabled}
            data={data}
            selektGrup={selektGrup}
            setSelektGrup={setSelektGrup}
          />
        </TabPanel>

        <TabPanel header="Procese">
          <Procese setNdryshoKushtin={setNdryshoKushtin} disabled={disabled} />
        </TabPanel>

        <TabPanel header="Etiketa / Foto">
          <EtiketaFoto
            setNdryshoKushtin={setNdryshoKushtin}
            disabled={disabled}
          />
        </TabPanel>

        <TabPanel header="Oferte">
          <Oferte setNdryshoKushtin={setNdryshoKushtin} disabled={disabled} />
        </TabPanel>

        <TabPanel header="Te tjera">
          <TeTjera setNdryshoKushtin={setNdryshoKushtin} disabled={disabled} />
        </TabPanel>

        <TabPanel setNdryshoKushtin={setNdryshoKushtin} header="Asetet">
          <Asetet
            setNdryshoKushtin={setNdryshoKushtin}
            disabled={disabled}
            data={data}
            selektAAmKlasifkim1={selektAAmKlasifkim1}
            setSelektAAmKlasifikim1={setSelektAAmKlasifikim1}
            selektAAmKlasifkim2={selektAAmKlasifkim2}
            setSelektAAmKlasifikim2={setSelektAAmKlasifikim2}
            selektAAmKlasifkim3={selektAAmKlasifkim3}
            setSelektAAmKlasifikim3={setSelektAAmKlasifikim3}
          />
        </TabPanel>
      </TabView>
    </div>
  );
};

export default PaneliArtikuj;
