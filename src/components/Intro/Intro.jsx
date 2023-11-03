import React, { useState, useEffect } from "react";
import { Title, Text, Grid } from "@mantine/core";
import classes from "./Intro.module.css";
import "./Intro.scss";
import { ImageCollection } from "../../assets";

export default function Intro() {


  const socials = [
    { img:ImageCollection.Linkedin, alt: "My Linkedin Profile" },
    { img:ImageCollection.Github, alt: "My Github Profile" },
    { img:ImageCollection.Instagram, alt: "My Instagram Profile" },
    { img:ImageCollection.Twitter, alt: "My Twitter Profile" },
  ]


  return (
    <div className={`bg-[#191924] px-8 h-[100vh] ${classes.wrapper}`}>
      <Grid gutter={80} className="pt-[7rem]">
        <Grid.Col span={{ md: 6.6 }} className="space-y-3">
          <Title
            className={`text-white font-sans text-[50px] ${classes.title}`}
          >
            Hi, I am Osborne Aigbiremolen
          </Title>
          <Title
            className={`text-white font-sans text-[32px] ${classes.title}`}
            order={2}
          >
            I am
            <span className="text-[#854ce6] placeholder"></span>
          </Title>

          <Text className="text-[#f2f3f495] text-[20px]">
            Digital Alchemist, Nigeria's Coding & Robotics Champion,
            Passionately Transforming Ideas into Innovation!
            <br />I turn lines of code into solutions that benefits everyone.
          </Text>
          <div className="flex">
           
          </div>
        </Grid.Col>
        <img
          src={ImageCollection.Myself}
          alt="My Picture"
          className="my-10 relative max-w-[400px] max-h-[400px] w-[100%] h-[100%] object-cover border-2 rounded-full border-[#854ce6]"
        />
      </Grid>
    </div>
  );
}
