import { PropsType } from 'prop-types';

export default function ProjectProps({ name, grade, title }) {
     return (
          
          <>
               <div>{ name }</div>
               <div>{ grade}</div>
               <div>{ title }</div>
                    
          </>
          
     )
}

ProjectProps.propTypes = {
     name: PropsType.string,
     grade: PropsType.string,
     title: PropsType.string,
}