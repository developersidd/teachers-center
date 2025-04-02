import React from "react";
import MaterialsTabsMenu from "./_components/MaterialsTabsMenu";

const MaterialsLayout = ({ tabs }: { tabs: React.ReactNode }) => {
  return (
    <section className="bg-white mt-6 rounded-lg shadow">
      <MaterialsTabsMenu />
      {tabs}
    </section>
  );
};

export default MaterialsLayout;
