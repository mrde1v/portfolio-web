import React from "react";
import { Link } from "react-router-dom";
import './css/Home.css';
import Logo from "./../img/logo.png";


function Home() {
  return (
    <div>
      <nav className="p-5 nav">
        <ul className="inline-flex gap-5">
          <li>
            <Link to="/" className="hover:text-[#20FD6A] transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/knowledge" className="hover:text-[#20FD6A] transition duration-300">Knowledge</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-[#20FD6A] transition duration-300">Projects</Link>
          </li>
        </ul>
      </nav>

      <div className="box bg-[#141615] bg-gradient-to-r from-[#0b110e] to-[#141615] p-20 mt-10 mb-10 cursor-default transform transition-all duration-150 ease-out">
        <div className="inline-flex float-left">
          <img className="inline-flex w-60 rounded-full" src={Logo} alt="logo" />
          <div>
            <h1 className="text-5xl font-bold text-gray-300 h-14">De1v#0111</h1>
            <p className="text-xl text-gray-600 float-left ml-1">SneaKy hEckeRmAn</p>
          </div>
        </div>
        <div className="bio  text-3xl mt-20 text-gray-400">
          <p>I'm Czech Republic <strong className="bg-gradient-to-r from-blue-500 to-[#20FD6A] text-white">Full-Stack Developer</strong> <br />
          Working on <strong>Cloud Gaming Software</strong> <br/>
          Programming in <strong>JS, Java, C#</strong> <br/>
          </p>
        </div>
        <div>
            <img className="mt-10 w-8/120" src="https://camo.githubusercontent.com/684489c3145f2348925b75918075be66888f2265c33542b6ef6f7c96af1534b1/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d70616e2d646531762673686f775f69636f6e733d74727565267468656d653d6d65726b6f" />
          </div>
        <div className="links gap-10 inline-flex mt-20 ">
          <a href="https://github.com/PaN-De1v/" className="hover:underline">GitHub</a>
          <a onClick={() => navigator.clipboard.writeText("De1v#0111").then(() => alert("Copied Discord Tag to clipboard!"))} className="hover:underline cursor-pointer">Discord</a>
          <a href="https://instagram.com/de1v_/" className="hover:underline">Instagram</a>
          <a href="https://www.youtube.com/playlist?list=PL2z8ccdvoP-WRmDjoo2TriMtCrvCv0VV2" className="hover:underline">Playlist</a>
        </div>
      </div>
      <p className="cursor-default">Copyright © De1v 2022</p>
    </div>
  )
}

export default Home;
