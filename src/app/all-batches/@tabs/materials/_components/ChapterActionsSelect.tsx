const ChapterActionsSelect = () => {
  return (
    <select className="bg-gray-100 border-r-12 border-transparent text-gray-900 text-sm  rounded-xl focus:outline-0 p-3 ">
      <option value="">Actions</option>
      <option value="add">Add</option>
      <option value="remove">Remove</option>
      <option value="update">Update</option>
    </select>
  );
};

export default ChapterActionsSelect;
