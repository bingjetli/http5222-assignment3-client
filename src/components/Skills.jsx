import React, { useEffect, useState } from 'react';
import SkillIcon from './SkillIcon';


export default function Skills() {
    const [skills_data, setSkillsData] = useState(null);


    useEffect(() => {
        const backend_api_base_url = process.env.REACT_APP_BACKEND_API_URL;

        console.log("Fetching skills...");
        fetch(`${backend_api_base_url}/api/skills/get-all`)
            .then(r => r.json())
            .then(r => {
                console.log(r.content);
                setSkillsData(r.content);
            })
            .catch(e => console.log(e));
    }, []);

    return (
        <section className='container mx-auto border-4 border-t-0 border-slate-600'>
            <h2 className='ps-4 pt-4 text-3xl font-bold text-slate-600 lg:ps-8 lg:pt-8'>
                Skills
            </h2>
            <div className='flex flex-wrap gap-1 m-4 lg:m-8'>
                {
                    skills_data === null ?
                        <p>No Skills Data Available</p> :
                        // @ts-ignore
                        skills_data.length <= 0 ?
                            <p>Skills are empty</p> :
                            // @ts-ignore
                            skills_data.map((k, i) => <SkillIcon key={i} data={k} replace_background_color="#fafaf9" replace_foreground_color="#475569" />)
                }
            </div>
        </section>
    );
}