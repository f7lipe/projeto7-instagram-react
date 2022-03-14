
export default function SuggestionList(props) {
    const {img, user} = props;
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={img} />
                <div class="texto">
                    <div class="nome">{user}</div>
                    <div class="razao">{user === "razoesparaacreditar" ? "Novo no Instagram" : "Segue você"}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    )
}