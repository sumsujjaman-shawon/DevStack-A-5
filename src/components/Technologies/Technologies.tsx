import { use } from 'react';
import type { Itechnology } from '../../types/technologyType';

interface TechnologiesProps {
    technologiesPromies: Promise<Itechnology[]>
}

const Technologies = ({technologiesPromies}:TechnologiesProps) => {
    const technologies = use(technologiesPromies);
    console.log(technologies, 'technologies');
    
    
    return (
        <div>
            
        </div>
    );
};

export default Technologies;