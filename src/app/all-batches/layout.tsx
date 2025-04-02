import AllBatchesHeader from "./_components/AllBatchesHeader";
import TabsMenu from "./_components/TabsMenu";

const AllBatchesLayout = ({ tabs }: { tabs: React.ReactNode }) => {
  return (
    <section className="">
      <AllBatchesHeader />
      <TabsMenu />
      {tabs}
    </section>
  );
};

export default AllBatchesLayout;
