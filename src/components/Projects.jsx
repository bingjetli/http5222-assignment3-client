import React, { useEffect, useState } from 'react';
import ProjectEntry from './ProjectEntry';


export default function Projects() {
    const [projects, setProjects] = useState(null);


    useEffect(() => {

        //Run this once the webpage loads.
        const backend_api_base_url = process.env.REACT_APP_BACKEND_API_URL;


        fetch(`${backend_api_base_url}/api/projects/get-all`)
            .then(r => r.json())
            .then(r => {
                console.log("Updating projects array...");
                setProjects(r.content);
            });

    }, []);


    return (
        <section className='container mx-auto border-4 border-t-0 divide-x-4 border-slate-500 flex'>
            {
                projects === null ?
                    <p>Loading projects...</p> :

                    // @ts-ignore
                    projects.length <= 0 ?
                        <p>No projects to render...</p> :
                        // @ts-ignore
                        projects.map((p, i) => <ProjectEntry project_data={p} key={i} />)
            }
        </section>
    );
}