import React from "react";
import { PanelMenu } from "primereact/panelmenu";
import { ScrollPanel } from "primereact/scrollpanel";

const UserPos = () => (
  <div className="sidebar1">
    <ScrollPanel style={{ width: "100%", height: "85vh" }}>
      <PanelMenu
        model={[
          {
            label: "Users",
            items: [
              {
                label: "User 1",

                icon: "pi pi-fw pi-circle",
              },
              {
                label: "User 2",
                icon: "pi pi-fw pi-circle",
              },
              {
                label: "User 3",
                icon: "pi pi-fw pi-circle",
              },
              {
                label: "User 4",
                icon: "pi pi-fw pi-circle",
              },
            ],
          },
        ]}
      />
    </ScrollPanel>
  </div>
);

export default UserPos;
