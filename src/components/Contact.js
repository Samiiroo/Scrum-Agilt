import React from 'react';
import '../scss/components/_contact.scss';


function Contact(props) {
    return (

        <div className="grid-container">
        <div className="icon-container">
        <div className="icons">
             <div className="icon"> <i className="fas fa-map-marker-alt fa-2x"></i> </div>
                <div className="box-text">Adress: Kattstigen 52A  26334 Helsingborg</div>
            </div>
            <div className="icons">
            <div className="icon"> <i className="fas fa-phone-alt fa-2x"></i></div>
                <div className="box-text">Telefon: 042-333 12 52</div>
            </div>
            <div className="icons">
            <div className="icon"> <i className="fas fa-envelope fa-2x"></i></div>
                <div className="box-text">E-postadress: Tamam@agile.se</div>
            </div>
        </div>
        <div className="grid-container-contact">
            <div className="grid-contactform">
                <label for="fullname">För- och Efternamn</label>
                <input type="text" id="fname" name="fullname" placeholder="Namn"></input>
                <label for="email">E-postadress</label>
            <input type="text" id="email" name="email" placeholder="E-postadress"></input>
            <label for="subject">Ämne </label>
            <select id="subject" name="Ämne">
                <option value="Produktfråga">Produkt</option>
                <option value="tjänst">Tjänst</option>
                <option value="Fakturafrågor">Faktura</option>
                <option value="Feedback">Feedback</option>
                <option value="övrigt">Övrigt</option>
            </select> 
            <label for="message">Meddelande</label>
            <textarea id="message" name="message" placeholder="Beskriv ditt ärende här.." ></textarea>
            <div><button className="button-send">Skicka</button></div>
            </div>
            <div className="grid-imgbox"></div>
        </div>
        </div>
        
        

    )
}
    

export default Contact;