import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return(
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
    
      <div className="w-full h-96 flex gap-20 items-center justify-center mt-32 mb-72">
        <div className="bg-[#1e221c] w-80 h-96 mt-10 rounded-xl drop-shadow-xl">
          <h1 className="text-purple-600 font-bold text-2xl mt-16">Dearths</h1>
          <p className="mt-10 code">Minecraft Dev Studio<br/>Making PermShop,<br/> Anti-Cheat</p>
          <p className="mt-5 code">Status: <strong className="text-red-600">In Progress</strong></p>
        </div>
        <div className="bg-[#1e221c] w-80 h-96 mt-10 rounded-xl drop-shadow-xl">
          <h1 className="text-yellow-500 font-bold text-2xl mt-16">GeAtropol</h1>
          <p className="mt-10 code">Cloud Gaming Service<br/>Low latency gaming <br/>on remote computer</p>
          <p className="mt-5 code">Status: <strong className="text-red-600">In Progress</strong></p>
        </div>
        <div className="bg-[#1e221c] w-80 h-96 mt-10 rounded-xl drop-shadow-xl">
          <h1 className="text-cyan-400 font-bold text-2xl mt-16">IpWare Proxy</h1>
          <p className="mt-10 code">Reverse Proxy for<br/>minecraft servers<br/>without public ip</p>
          <p className="mt-5 code">Status: <strong className="text-red-600">Suspended</strong></p>
        </div>
      </div>
      <p className="cursor-default">Copyright © De1v 2022</p>
    </div>
  )
}

export default Projects;
