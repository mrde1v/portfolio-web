import React from "react";
import { Link } from "react-router-dom";

function Knowledge() {
  return(
    <div>
      <nav className="bg-[#171a18] p-5">
        <ul className="inline-flex gap-5">
          <li>
            <Link to="/" className="hover:text-[#20FD6A] transition">Home</Link>
          </li>
          <li>
            <Link to="/knowledge" className="hover:text-[#20FD6A] transition">Knowledge</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-[#20FD6A] transition">Projects</Link>
          </li>
        </ul>
      </nav>

      <div className="flex mb-10 mt-10">
        <div className="w-full p-10 text-center bg-center">
          <h1 className="text-[#20FD6A] font-bold">Front-End</h1>
          <div className="rounded-full ml-96 w-2/5 h-8 pt-5 pb-12 mt-5 bg-gradient-to-r from-blue-500 to-[#20FD6A] text-center bg-center float-left">
            <p className="float-right text-black font-bold mr-5">80%</p>
            <p className="text-black">HTML/CSS, JS, React</p>
          </div>
        </div>
      </div>
      <div className="flex mb-10 mt-10">
        <div className="w-full p-10 text-center bg-center">
          <h1 className="text-[#20FD6A] font-bold">Back-End</h1>
          <div className="rounded-full ml-96 w-1/5 h-8 pt-5 pb-12 mt-5 bg-gradient-to-r from-blue-500 to-[#20FD6A] text-center bg-center float-left">
            <p className="float-right text-black font-bold mr-5">30%</p>
            <p className="text-black">NodeJS, Java</p>
          </div>
        </div>
      </div>
      <div className="flex mb-24 mt-10">
        <div className="w-full p-10 text-center bg-center">
          <h1 className="text-[#20FD6A] font-bold">Database</h1>
          <div className="rounded-full ml-96 w-96 h-8 pt-5 pb-12 mt-5 bg-gradient-to-r from-blue-500 to-[#20FD6A] text-center bg-center float-left">
            <p className="float-right text-black font-bold mr-5">35%</p>
            <p className="text-black">MongoDB, MySQL</p>
          </div>
        </div>
      </div>

      <p className="cursor-default">Copyright © De1v 2022</p>
    </div>
  )
}

export default Knowledge;