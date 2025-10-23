const page = () => {
  return (
    <main className="w-full p-6 flex flex-col gap-3">
      <div className="flex gap-5 items-center">
        <div className="flex">
          <h3 className="text-white bg-green-500 px-4 py-2 rounded-full text-xs font-bold">
            Create
          </h3>
        </div>
        <h1 className="font-bold">Category | Form</h1>
      </div>
      <section className="flex">
        <form className="flex flex-col gap-2 bg-blue-50 rounded-xl p-7">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-500">
              Category Name <span className="text-red-500">*</span>{" "}
            </label>
            <input
              className="px-4 py-2 rounded-full border bg-gray-50"
              placeholder="Enter Category Name"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-500">
              Category Slug <span className="text-red-500">*</span>{" "}
            </label>
            <input
              className="px-4 py-2 rounded-full border bg-gray-50"
              placeholder="Enter Category Slug"
              type="text"
              required
            />
          </div>
          <div>
            <img className="h-40" src="" alt="" />
          </div>
          <div>
            <img className="h-40" src="" alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-500">Image </label>
            <input
              className="px-4 py-2 rounded-full border bg-gray-50"
              placeholder="Enter Category Slug"
              type="file"
              accept="image/*"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 rounded-full px-4 py-2 text-white"
          >
            Create
          </button>
        </form>
      </section>
    </main>
  );
};

export default page;
