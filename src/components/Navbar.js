export default function Navbar() {
    const icons = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];
    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="separador"></div>
                    <img src="assets/img/logo.png" />
                </div>
                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
                <div class="icones">
                    {icons.map(icon => <ion-icon name={icon}></ion-icon>)}
                </div>
            </div>
        </div>
    )
}