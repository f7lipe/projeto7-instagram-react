export default function Story(props) {
    const {img, user} = props;
    return (
        <div class="story">
            <div class="imagem">
                <img src={img} />
            </div>
            <div class="usuario">
                {user}
            </div>
        </div>
    )
    }