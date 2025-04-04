const ChapterMetadata = () => {
  return (
    <section className=" min-w-max border-l border-gray-300 p-3">
      <dl className="flex flex-col gap-2 text-sm  ">
        <div className="flex flex-wrap gap-x-2">
          <dt className="font-bold ">Created on:</dt>
          <dd>25/02/2025 10:35 pm</dd>
        </div>

        <div className="flex flex-wrap gap-x-2">
          <dt className="font-bold ">Created by:</dt>
          <dd>Sir</dd>
        </div>

        <div className="flex flex-wrap gap-x-2">
          <dt className="font-bold ">Last Modified:</dt>
          <dd>Friday, 25/02/2025, 10:35 pm</dd>
        </div>

        <div className="flex flex-wrap gap-x-2">
          <dt className="font-bold ">Last Modified by:</dt>
          <dd>Sir</dd>
        </div>

        <div className="flex flex-wrap gap-x-2">
          <dt className="font-bold ">Kind:</dt>
          <dd>PDF Document</dd>
        </div>

        <div className="flex flex-wrap gap-x-2">
          <dt className="font-bold ">Size:</dt>
          <dd>23 MB</dd>
        </div>
      </dl>
    </section>
  );
};

export default ChapterMetadata;
