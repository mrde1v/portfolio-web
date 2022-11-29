import React from "react";

function Projects() {
  return(
    <div>
      <nav className="bg-[#171a18] p-5 nav">
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
    
      <div className="container">
        <div className="bg-[#171a15]">
        </div>
      </div>
    </div>
  )
}

export default Projects;
