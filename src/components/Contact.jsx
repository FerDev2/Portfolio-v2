import general from '../styles/general.module.css'
import conta from '../styles/contact.module.css'

function Contact() {
    return (
      <div id="Contact" className={general.size}>
        
        <div className={conta.content}>

          <h3>05 CONTACT</h3>
          
          <div className={conta.formula}>

              <form name="contact" method='POST' >
                  {/* Hidden para la conexion del fomulario con el html */}
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div className={conta.nombre}>
                    <label htmlFor="nombre">Fullname: </label>
                    <input id="nombre" name="name" type="text" />
                  </div>
                  
                  <div className={conta.email}>
                    <label htmlFor="email">Email: </label>
                    <input id="email" name="email" type="email" />
                  </div>
                  
                  <div className={conta.asunto}>
                    <label htmlFor="asun">Subject:</label>
                    <input id="asun" name="subject" type="text"></input>
                  </div>
  
                  <div className={conta.text}>
                    <label htmlFor="messag">Message:</label>
                    <textarea id="mesag" name="message"></textarea>
                  </div>
  
                    <button type="submit">Send</button>
  
              </form>

              <div className={conta.imgconta}>
  
                <div className={conta.cell}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>
                  <p>+51 926125354</p>
                </div>
    
                <div className={conta.mail}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                  </svg>
                  <div>
                    <p>favl123@hotmail.com</p>
                    <p>fer.dev21@gmail.com</p>
                  </div>
                </div>
  
                <div className={conta.linke}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                  <a href="https://www.linkedin.com/in/fernando-varas-lizana/">Fernando Varas Lizana</a>
                </div>
  
              </div>
          </div>

        </div>  

      </div>
    );
  }

export default Contact;