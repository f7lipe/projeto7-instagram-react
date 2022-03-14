export default function Top(props) {
    const {img, user} = props;
    return (
    <div class="topo">
        <div class="usuario">
            <img src={img} />
            {user}
        </div>
        <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
    </div>
    )
  }