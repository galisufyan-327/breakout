export const EmptyAddBox = () => {
  return (
    <div className="my-3 flex w-full items-center justify-center gap-3 rounded-2xl border border-dashed border-gray-500 px-10 py-11 text-center md:w-[438px]">
      <button
        className="m-0 h-14 w-14 rounded-full dark:bg-black dark:text-white"
        type="button"
      >
        +
      </button>
      <span className="font-bold text-gray-500">Add Product</span>
    </div>
  );
};
