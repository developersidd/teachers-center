import React from "react";
import MaterialsTabsMenu from "./_components/MaterialsTabsMenu";

const MaterialsLayout = ({ tabs }: { tabs: React.ReactNode }) => {
  return (
    <section className="bg-white mt-6 pb-3 rounded-lg shadow min-h-[400px]">
      <MaterialsTabsMenu />
      {tabs}
    </section>
  );
};

export default MaterialsLayout;
