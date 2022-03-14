export default function Background(props) {
    return (
    <div class="fundo">
        <Actions />
        <div class="curtidas">
            <img src={props.img} alt="imagem" />
            <div class="texto">
            Curtido por <strong>{props.user}</strong> e <strong>outras {props.likes} pessoas</strong>
            </div>
        </div>
    </div>
    )
}

function Actions() {
    return (
    <div class="acoes">
        <div>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
        <ion-icon name="bookmark-outline"></ion-icon>
        </div>
    </div>
    )
}