import React from "react";
import {
  Group,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Navigation.module.css";

export default function Navigation() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box className="">
      <header className={`bg-[#191924] px-8 text-white font-sans ${classes.header}`}>
        <Group h="100%" className="flex justify-evenly">
          <MantineLogo size={30} />

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              About
            </a>
            <a href="#" className={classes.link}>
              Skills
            </a>
            <a href="#" className={classes.link}>
              Experience
            </a>
            <a href="#" className={classes.link}>
              Projects
            </a>
            <a href="#" className={classes.link}>
              Education
            </a>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            size={23}
            color="white"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        hiddenFrom="sm"
        zIndex={1000000}
        className="font-sans"
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md" className="">
          <a href="#" className={classes.link}>
            About
          </a>
          <a href="#" className={classes.link}>
            Skills
          </a>
          <a href="#" className={classes.link}>
            Experience
          </a>
          <a href="#" className={classes.link}>
            Projects
          </a>
          <a href="#" className={classes.link}>
            Education
          </a>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
