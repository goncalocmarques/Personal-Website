import Hero from '../components/Hero';
import Portfolio from "../components/Portfolio.jsx";
import About from '../components/About.jsx';
import { useState, useEffect } from 'react';
import Loading from "../components/Loading";
import { db } from "../firebase.js";
import { collection } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import Empty from '../components/Empty.jsx';
import { useLocation } from 'react-router-dom';
import React from 'react';

const Home = React.forwardRef((props, ref) => {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
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


  if(loading) return <Loading/>

  return (
      <div className='bg-backgroundColor w-screen snap-y snap-mandatory overflow-y-scroll'>
            <div id="home">
              <Hero/>
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