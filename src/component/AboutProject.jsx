import React from "react";
import classes from "./css/MyAboutProject.module.css"

const AboutProject = () => {

   return (
      <div>
         <h2 className={classes.title}>О проекте</h2>

         <p className={classes.p1}>
            сайт был создан для удобного распределения финансов, накоплений на различные цели и для     общего пользования.
         </p>
      </div>
   );
};

export default AboutProject;



