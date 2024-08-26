"use client";
import { Box, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import React, { useState } from "react";

function MuiDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="flex lg:hidden">
      <IconButton>
        <MenuIcon
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          onClick={() => setIsDrawerOpen(true)}
        />
      </IconButton>
      <Drawer
        anchor="right"
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
          <Link href={"/"}>Rezept einolsen</Link>
          <Link href={"/"}>Live Bestand</Link>
          <Link href={"/"}>Videosprechstunde</Link>
          <Link href={"/"}>FAQs</Link>
          <Link href={"/"}>Konkat</Link>
          <Link
            href={"/"}
            className="bg-lime-200 text-center rounded-tl-3xl rounded-br-3xl p-1 "
          >
            Anmelden
          </Link>
        </Box>
      </Drawer>
    </div>
  );
}

export default MuiDrawer;
