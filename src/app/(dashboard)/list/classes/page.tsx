"use client";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { classesData, role, subjectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Class = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

const columns = [
  {
    header: "Class Name",
    accessor: "name",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];
const ClassLists = () => {
  const renderRow = (item: Class) => (
    <tr
      key={item.id}
      className=" border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col ">
          <h3 className="font-semibold">{item.name}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.supervisor}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-sky">
              <Image src="/edit.png" alt="view" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-purpleMain">
              <Image src="/delete.png" alt="view" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <>
      <div className="bg-white rounded-md p-4 flex-1 m-4 mt-0">
        {/* TOP */}
        <div className="flex items-center justify-between">
          <h1 className="hidden md:block text-lg font-semibold">
            All Subjects
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <TableSearch />
            <div className="flex items-center gap-4 self-end">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellowMain">
                <Image src="/filter.png" width={14} height={14} alt="" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellowMain">
                <Image src="/sort.png" width={14} height={14} alt="" />
              </button>

              {role === "admin" && (
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellowMain">
                  <Image src="/plus.png" width={14} height={14} alt="" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* LIST */}
        <div className="">
          <Table columns={columns} renderRow={renderRow} data={classesData} />
        </div>

        {/* PAGINATION */}
        <Pagination />
      </div>
    </>
  );
};

export default ClassLists;
