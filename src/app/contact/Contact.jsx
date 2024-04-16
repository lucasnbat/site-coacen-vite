// import React from 'react'
import  fazendaSuperior  from '../../assets/img/kelly-sikkema-6DNGQe6SL-c-unsplash.jpg'
import { ContactComponent } from '../../components/ContactComponent'


//testando
export function Contact() {
    return (
        <div>
            <div className="bg-cover bg-fixed" style={{ backgroundImage: `url(${fazendaSuperior})` }}>
                <ContactComponent />
            </div>

        </div>
    )

}
