// export default function Page() {
//   return <h1>teste</h1>;
// }

"use client";

import React, { useState } from "react";

const Menu = () => {
  const [selectedTab, setSelectedTab] = useState("");

  const tabs = ["Home", "Sobre", "Contato"];

  return (
    <div className="menu">
      <div className="desktop-tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${selectedTab === tab ? "active" : ""}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </div>
        ))}
        <div className="content">
          {selectedTab === "Home" && <div>Conteúdo da Home</div>}
          {selectedTab === "Sobre" && <div>Conteúdo sobre nós</div>}
          {selectedTab === "Contato" && <div>Conteúdo de contato</div>}
        </div>
      </div>

      <div className="mobile-accordion">
        {tabs.map((tab, index) => (
          <div key={index} className="accordion-item">
            <div
              className="accordion-title"
              onClick={() => setSelectedTab(selectedTab === tab ? "" : tab)}
            >
              {tab}
            </div>
            {selectedTab === tab && (
              <div className="accordion-content">
                {tab === "Home" && <div>Conteúdo da Home</div>}
                {tab === "Sobre" && <div>Conteúdo sobre nós</div>}
                {tab === "Contato" && <div>Conteúdo de contato</div>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
