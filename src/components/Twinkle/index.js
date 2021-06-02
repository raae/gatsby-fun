import React, { useCallback, useEffect, useState } from "react";
import * as twinkleStyle from "./twinkle.module.css";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const Twinkle = ({ children, freq = 1 }) => {
  // To keep track of active children
  const [active, setActive] = useState({});

  // Must use callback so the function is not redefined on every render,
  // as it would then trigger the useEffect to start over
  const twinkleImage = useCallback(() => {
    let n = getRandomInt(28);
    let rand = getRandomInt(1000) + 2000;

    setActive((active) => ({ ...active, [n]: true }));
    //
    const timer = setTimeout(function () {
      setActive((active) => ({ ...active, [n]: false }));
    }, rand);

    // Return timer so it can be cleaned up by useEffect
    return timer;
  }, [setActive]);

  useEffect(() => {
    const timers = [];

    const loop = () => {
      const rand = getRandomInt(1000) + 1000;
      const timer = setTimeout(function () {
        timers.push(twinkleImage());
        loop();
      }, rand);
      timers.push(timer);
    };

    // Use component prop `freq` to decide how many loops
    for (let index = 0; index < freq; index++) {
      loop();
    }

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [twinkleImage, freq]);

  return React.Children.map(children, (child, key) => {
    let twinkleClassName = active[key]
      ? twinkleStyle.active
      : twinkleStyle.inactive;

    return React.cloneElement(child, {
      className: [child.props.className, twinkleClassName].join(" "),
    });
  });
};
