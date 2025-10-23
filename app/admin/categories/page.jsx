import { CirclePlus } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="p-6 w-full flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Categories</h1>
        <Link href={"/admin/categories/form"}>
          <button className="flex gap-2 items-center bg-blue-500 px-4 py-2 text-white rounded-full font-bold">
            <CirclePlus />
            Add
          </button>
        </Link>
      </div>
      <section>
        <table className="w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2 bg-blue-50">Sr.</th>
              <th className="border px-4 py-2 bg-blue-50">Icon</th>
              <th className="border px-4 py-2 bg-blue-50">Name</th>
              <th className="border px-4 py-2 bg-blue-50">Slug</th>
              <th className="border px-4 py-2 bg-blue-50">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">
                {" "}
                <img className="h-10" src="" alt="" />{" "}
              </td>
              <td className="border px-4 py-2">Faizan</td>
              <td className="border px-4 py-2">faizan</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm">
                  Action
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
