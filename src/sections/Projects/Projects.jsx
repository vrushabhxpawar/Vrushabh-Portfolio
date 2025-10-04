import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src="staynest.png"
          link="https://github.com/vrushabhxpawar/staynest"
          h3="Staynest"
          p="Property rental platform"
        />
        <ProjectCard
          src="streamify.png"
          link="https://github.com/vrushabhxpawar/streamify"
          h3="Streamify"
          p="Realtime chat & Videocall app"
        />
        <ProjectCard
          src="linkedin.png"
          link="https://github.com/vrushabhxpawar/linkedin-clone"
          h3="LinkedIn"
          p="Professional Networking Platform"
        />
      </div>
    </section>
  );
}

export default Projects;
