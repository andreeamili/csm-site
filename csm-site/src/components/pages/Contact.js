import React from 'react'
import homeImage from './pictures/contact-background.jpg';
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div>
        <img className='contact-image' src={homeImage} alt='Home Background' />
      </div>
      <div className="table-wrapper">
        <div className='text-header'>Contact
        </div>
        <div className='contact-information'>Contact informations
        </div>
        <div className='contact-information-second'>Contact us to make a reservation or to request additional information
        </div>
        <div className='adress'>
          <p><strong>Adresa:</strong> Strada Semaforului 11, Sibiu
          </p>
          <p>
            <strong> Phone:</strong> 0749.222.222 / 0742.222.222
          </p>
          <p>
            <strong> Email:</strong> EquestrianCSM@yahoo.com
          </p>
        </div>
        <div>
          <iframe className='frame' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11129.259332723655!2d24.1704195!3d45.78492!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474c677baf80da61%3A0xa19e5f77f0328971!2sEchitatie%20CSM%20Sibiu!5e0!3m2!1sro!2sro!4v1683067691851!5m2!1sro!2sro"
            width="600px"
            height="500px"
            style={{ border: "0", marginBottom: "5%" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className="contact-footer">
        <h3 className="top-contact">Contact</h3>
        <p>Adress: Strada Semaforului 11, Sibiu</p>
        <p>Phone: 0749.222.222 / 0742.222.222</p>
        <p>Email:  EquestrianCSM@yahoo.com</p>
        <p className="down-contact">&copy; 2023 Csm Sibiu Equestrian Baze. All the rights are reserved.</p>
      </div>

    </div>
  );
}

export default Contact
