import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase.js'; 
import Loading from '../components/Loading';

function ProjectPage() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const docRef = doc(db, 'projects', projectId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProject({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No such document!");
      }
    };

    fetchProject();
  }, [projectId]);

  if (!project) return <Loading/>

  return (
    <article className='w-screen bg-backgroundColor pt-20'>
      <div className='w-full relative'>
        <img src={project.image} alt={project.image_alt} className='w-full h-[500px] object-cover'/>
        <div className='w-full h-20 flex  justify-center absolute bottom-0' style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
          <h1 className='pt-2 md:text-6xl text-2xl text-white'>{project.title}</h1>
        </div>
      </div>
      <section className="flex flex-col border-b-footerText border-b-2 px-10 mx-10 my-10">
        <h2 className="text-xl font-light text-textColor">Table of Contents</h2>
        <ol className="md:pl-16 py-10 list-decimal">
          {project.sections.map((section) => (
            <li className='p-4'>
              <a key={section.id} href={`#${section.id}`} className="text-textColor hover:text-textHoverColor">
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      
      </section>

      <section className='p-10'>
        {project.sections.map((section) => (
          <section id={section.id} key={section.id} className="p-4">
            <h2 className="text-3xl font-bold mb-10">{section.title}</h2>
            <p>{section.text}</p>
          </section>
        ))}
      </section>

    </article>
  );
}

export default ProjectPage;