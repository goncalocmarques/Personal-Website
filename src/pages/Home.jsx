import { useState, useEffect } from 'react';
import { doc, getDoc, collection, onSnapshot } from 'firebase/firestore';
import { useLocation } from 'react-router-dom';
import { db } from '../firebase.js';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio.jsx';
import About from '../components/About.jsx';
import Loading from '../components/Loading';
import Empty from '../components/Empty.jsx';
import React from 'react';

const Home = React.forwardRef((props, ref) => {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [cv, setCV] = useState("");
  useEffect(() => {
    getProjects();
    getCV();
  }, []);

  const getProjects = async () => {
    setLoading(true);
    const unsub = onSnapshot(collection(db, 'projects'), (snapshot) => {
      const projectsArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectsArray);
      setLoading(false);
    });
    return () => unsub();
  };

  const getCV = async () => {
    setLoading(true);
    const docRef = doc(db, 'cv', 'myCV'); 
    try {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setCV(docSnap.data().link);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
    setLoading(false);
  }

  const location = useLocation();
  
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);


  if(loading) return 
  <div className='flex items-center justify-center w-screen'>
    <Loading/>
  </div>

  return (
      <div className='bg-backgroundColor w-screen snap-y snap-mandatory overflow-y-scroll'>
            <div id="home">
              <Hero cvLink={cv}/>
            </div>
            <Empty/>
            <Empty/>
            <section id="portfolio">
              <Portfolio projects={projects} size={projects.length} />
            </section>
            <Empty/>
            <Empty/>
            <section id="about">
              <About/>
            </section>
            
            
      </div>
    
  );
}) 
  


export default Home;