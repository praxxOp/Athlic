import React, { useEffect, useState } from "react";
import "./LoginButton.css";
import { motion, useScroll } from "framer-motion";
import { Link } from "react-router-dom";

const LoginButton = () => {
  const { scrollYProgress } = useScroll();
  const [ScrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    scrollYProgress.onChange((e) => {
      setScrollValue(e);
    });
  }, [scrollYProgress]);

  return (
    <>
      {ScrollValue <= 0.9 ? (
        <Link to="/login" style={{ textDecoration: "none" }}>
          <motion.div
            className="logIn__button"
            whileHover={{
              backgroundColor: "white",
              scale: 1.05,
            }}
          >
            <h2>Sign-In</h2>
          </motion.div>
        </Link>
      ) : null}
    </>
  );
};

export default LoginButton;
