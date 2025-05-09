import React, { useState } from "react";
import Table3 from "../../../Components/Table3";
import SideBar from "../SideBar";
import { Nachos } from "../../../Data/PopcornData";
import { FaSearch } from "react-icons/fa";

function SnackList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAlertOpen, setIsAlertOpen] = useState(false); // حالة النافذة المنبثقة

  // دالة لفتح النافذة المنبثقة
  const openAlert = () => {
    setIsAlertOpen(true);
  };

  // دالة لإغلاق النافذة المنبثقة
  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  // دالة لتنفيذ الإجراء عند التأكيد
  const handleConfirm = () => {
    console.log("All snacks deleted!");
    closeAlert(); // إغلاق النافذة بعد التأكيد
  };

  // تعديل بيانات الوجبات لتشمل المسار الصحيح للصور
  const NachosWithCorrectPaths = Nachos.map((snack) => ({
    ...snack,
    image: `${process.env.PUBLIC_URL}/images/snacks/${snack.image}`,
  }));

  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        {/* Search Bar */}
        <div className="flex items-center justify-start w-3/4">
          <form className="text-sm bg-dry border border-border rounded-xl flex items-center gap-4 w-full shadow-md">
            <button
              type="button"
              onClick={() => console.log("Search button clicked")}
              className="w-10 flex-colo h-10 rounded-2xl text-border hover:bg-subMain-dark transition duration-200"
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search Snacks Name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-dry font-medium placeholder:text-border text-sm h-10 bg-lightGray rounded-xl px-4 text-white focus:outline-none focus:ring-2 focus:ring-beige transition-all duration-300 w-full"
            />
          </form>
        </div>

        {/* Header with Delete All Button */}
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Snack List</h2>
          <button
            className="bg-red-500 font-medium transitions hover:bg-red-900 border border-red-400 flex-rows gap-4 text-white py-3 px-24 rounded-2xl w-full sm:w-auto"
            onClick={openAlert} // فتح النافذة المنبثقة عند النقر
          >
            Delete All
          </button>
        </div>

        {/* Table */}
        <Table3 data={NachosWithCorrectPaths} admin={true} />

        {/* Pop-up Alert */}
        {isAlertOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            onClick={closeAlert} // إغلاق النافذة عند النقر خارجها
          >
            <div
              className="bg-dry p-8 rounded-2xl shadow-lg text-center w-[90%] md:w-[400px]"
              onClick={(e) => e.stopPropagation()} // منع إغلاق النافذة عند النقر داخلها
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Are you sure?
              </h3>
              <p className="text-gray-400 mb-6">
                This action cannot be undone.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  className="bg-red-500 text-white py-2 px-6 rounded-xl hover:bg-red-700 transition duration-300"
                  onClick={handleConfirm} // تنفيذ الإجراء عند التأكيد
                >
                  Confirm
                </button>
                <button
                  className="bg-gray-500 text-white py-2 px-6 rounded-xl hover:bg-gray-700 transition duration-300"
                  onClick={closeAlert} // إغلاق النافذة عند الإلغاء
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </SideBar>
  );
}

export default SnackList;
