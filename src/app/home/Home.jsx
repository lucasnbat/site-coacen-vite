import { Hero } from "../../components/Hero"
import { History } from "../../components/History"
import { Institutional } from "../../components/Institutional"
import  fazendaSuperior  from '../../assets/img/kelly-sikkema-6DNGQe6SL-c-unsplash.jpg'

export function Home() {
    return (
        <div>
            <div className="bg-cover bg-fixed" style={{ backgroundImage: `url(${fazendaSuperior})` }}>
                <Hero />
            </div>
            <History />
            <Institutional />
        </div>
    )
}