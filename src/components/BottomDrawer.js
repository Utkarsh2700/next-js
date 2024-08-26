"use client";
import { Box, Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

function BottomDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="flex lg:hidden">
      <IconButton onClick={() => setIsDrawerOpen(true)}>
        <p className="bg-green-200 text-green-900 text-center font-semibold px-2 rounded-md">
          Filter
        </p>
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          mt={8}
          p={2}
          gap={3}
          width={"250px"}
          textAlign={"center"}
          role="presentation"
          sx={{ display: "flex", flexDirection: "column" }}
          className="w-[250px] sm:w-[450px] md:w-[550px]"
        >
          <h1>Sidebar</h1>
          <Sidebar />
        </Box>
      </Drawer>
    </div>
  );
}

export default BottomDrawer;
