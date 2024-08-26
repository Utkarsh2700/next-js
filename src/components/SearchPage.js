"use client";
import React from "react";
import Sidebar from "./Sidebar";
import Card from "./Card";
import { Pagination, PaginationItem } from "@mui/material";
import { green } from "@mui/material/colors";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BottomDrawer from "./BottomDrawer";

function SearchPage() {
  return (
    <>
      <BottomDrawer />
      <div className="flex w-full">
        <Sidebar className="w-3/12 hidden lg:flex flex-col mr-8 " />
        <div className="px-2 grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Row 1 */}
          <Card showBorder={true} />
          <Card showBorder={true} />
          <Card showBorder={true} />

          {/* Row 2 */}
          <Card showBorder={false} />
          <Card showBorder={false} />
          <Card showBorder={false} />
          {/* Row 3 */}
          <Card showBorder={true} />
          <Card showBorder={true} />
          <Card showBorder={true} />
        </div>
      </div>
      <div className="pagination flex justify-end my-4">
        <Pagination
          count={12}
          siblingCount={0}
          renderItem={(item) => (
            <PaginationItem
              sx={{ color: green[700], fontWeight: "bold" }}
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </div>
    </>
  );
}

export default SearchPage;
