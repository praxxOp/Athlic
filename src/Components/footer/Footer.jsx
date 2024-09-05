import React from 'react'
import "./Footer.css"
import { SiInstagram } from "react-icons/si";
import { LiaLinkedinIn } from "react-icons/lia";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
    <div className="main__footer" id="Contact">
      <div className="contact__description__section">
        <h3>shelke.prathamesh0012@gmail.com</h3>
        <p>
          "Don't hesitate to reach out—I'm currently open to both freelance
          projects and job/internship opportunities."
        </p>
      </div>
    <div className="links__section">
    <a href="https://www.instagram.com/praxx.dev/?igshid=ZGUzMzM3NWJiOQ%3D%3D">
      <div className="instagram link">
        <SiInstagram size={20} />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/prathamesh-shelke/">
      <div className="linkdin link">
        <LiaLinkedinIn size={20} />
      </div>
    </a>
    <a href="https://www.figma.com/@praxx">
      <div className="figma link">
        <PiFigmaLogoDuotone size={20} />
      </div>
    </a>
    <a href="https://github.com/praxxOp">
      <div className="github link">
        <FaGithub size={20} />
      </div>
    </a>
  </div>
</div>
</>
  )
}

export default Footer