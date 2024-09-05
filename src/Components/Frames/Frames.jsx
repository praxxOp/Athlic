import React, { useState, useEffect, useRef } from "react";
import "./Frames.css";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import FramesOne from "./FrameComponents/FramesComponentOne/framesOne";
import FramesTwo from "./FrameComponents/FramesComponentTwo/framesTwo";

const Frames = () => {
  const canvasRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [currentValue, setcurrentValue] = useState(0);
  const maxIndex = 121;
  const imagesRef = useRef([]);

  const { scrollYProgress } = useScroll();
  const animatedIndex = useTransform(scrollYProgress, [0, 0.7], [1, maxIndex]);

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");

    const preloadImages = () => {
      for (let index = 1; index <= maxIndex; index++) {
        const imageUrl = `/Assets/Extracted-Frames/frame_${index
          .toString()
          .padStart(4, "0")}.jpeg`;
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
          imagesRef.current[index] = img;
          setImagesLoaded((prev) => {
            const newCount = prev + 1;
            if (newCount === maxIndex) {
              loadImage(currentIndex, context);
            }
            return newCount;
          });
        };
      }
    };
    preloadImages();
  }, [currentIndex]);

  const loadImage = (index, context) => {
    if (index >= 1 && index <= maxIndex) {
      const img = imagesRef.current[index];
      if (img) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        const scaleX = canvasRef.current.width / img.width;
        const scaleY = canvasRef.current.height / img.height;
        const scale = Math.max(scaleX, scaleY);
        const newWidth = img.width * scale;
        const newHeight = img.height * scale;
        const offsetX = (canvasRef.current.width - newWidth) / 2;
        const offsetY = (canvasRef.current.height - newHeight) / 2;
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";
        context.clearRect(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
      }
    }
  };

  useEffect(() => {
    return animatedIndex.on("change", (latestIndex) => {
      loadImage(Math.floor(latestIndex), canvasRef.current.getContext("2d"));
      setcurrentValue(latestIndex);
    });
  }, [animatedIndex]);


  return (
    <div className="Frames__parent">
      <div className="Frames__children">
        <motion.canvas
          ref={canvasRef}
          id="FrameImages"
          initial={{ width: "100%", height: "100%" }}
          animate={{
            width: currentValue <= 43 ? "100%" : "35%",
            height: currentValue <= 43 ? "100%" : "97%",
            borderRadius: currentValue <= 43 ? "0" : "10px",
            marginLeft: currentValue <= 43 ? "0" : "12vw",
          }}
          transition={{ duration: 1 }}
        ></motion.canvas>
        <div className="frames__components">
          {currentValue <= 43 && <FramesOne key="framesOne" />}
          {currentValue > 43 &&  (
            <FramesTwo key="framesTwo" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Frames;
