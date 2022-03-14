
import User from "./User";
import Suggestions from "./Suggestions";


const user = {img: "assets/img/catanacomics.svg", username: "catanacomics", name: "Catana"};
const {img, username, name} = user;

export default function Sidebar() {
    return (
    <div class="sidebar">
        <User img={img} username={username} name={name} />
        <Suggestions />
        <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
        <div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
        </div>
    </div>
    )
}