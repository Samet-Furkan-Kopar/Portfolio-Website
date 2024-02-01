import doctorProjectImg from '../assets/images/doctorProject.jpeg';
import ProjectItems from './ProjectItems';
const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'> Kendimi geliştirmek için </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItems img={doctorProjectImg} title='Doktor Projesi' url='https://github.com/Samet-Furkan-Kopar/Doctor-Project'/>
            <ProjectItems/>
            <ProjectItems/>
            <ProjectItems/>
        </div>
    </div>
  )
}

export default Projects
