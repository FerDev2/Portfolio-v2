import general from '../styles/general.module.css'
import edu from '../styles/education.module.css'


function Education() {
    return (
      <div id="Education" className={general.size}>
        <div className={edu.content}>
          
          <h3>04 EDUCATION</h3>
            
            <div className={edu.list}>
              <section>
                <h4>Electronic Technical</h4>
                <p>2015 - 2018</p>
                <div>
                  I studied the technical career as an industrial electronics graduate in Senati
                </div>
              </section>
  
              <section>
                <h4>Software Developer Technical</h4>
                <p>2015 - 2017</p>
                <div>
                  I studied the technical career as an industrial electronics graduate in Senati
                </div>
              </section>
  
              <section>
                <h4>System Engineer</h4>
                <p>2019- 2023</p>
                <div>
                  Actually I am studying the 9th cycle of the carrer
                </div>
              </section>
            </div>




        </div>
      </div>
    );
  }

export default Education;