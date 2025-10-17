import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Table from "./Table";

function Buildings() {
  return ( 
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header stays at the top */}
        <div className="sticky top-0 z-10">
          <Header />
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Buildings;
