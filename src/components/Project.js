

const Project = ({projData}) => {
  return (
    <>
    { projData.map((project) => (
          <div className={`grid-items item-${project.id}`}>
            <a href={project.pageLink} target="_blank">
            <div className="media-div">
              <img src={project.imgSrc} alt=""/>
              <video src={project.vidSrc} type="video/mp4" loop muted autoPlay></video>
            </div>
            <div className="projects-text">
              <div className="projects-text-top">
                <h1>{project.title}</h1>
                <p>{project.desc}</p>
              </div>
              <div className="cta-btns no-pointer">
                <a href={project.pageLink} target="_blank">
                  <button className="btn">View Project</button>
                </a>
                <a href={project.sourceCode} target="_blank">
                  <button className="btn">Source Code</button>
                </a>
              </div>
            </div>
          </a>
        </div>
        ))
      }
      </>
  )
}

export default Project