export default function User(props) {
    const {img, username, name} = props;
    return (
        <div class="usuario">
            <img src={img} />
            <div class="texto">
            <strong>{username}</strong>
            {name}
            </div>
        </div>
    )
}