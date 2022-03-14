import SuggestionList from "./SuggestionList";

const suggestions_ = [
    { img: "./assets/img/bad.vibes.memes.svg", user: "bad.vibes.memes" },
    { img: "./assets/img/chibirdart.svg", user: "chibirdart" },
    { img: "./assets/img/razoesparaacreditar.svg", user: "razoesparaacreditar" },
    { img: "./assets/img/adorable_animals.svg", user: "adorable_animals" },
    { img: "./assets/img/smallcutecats.svg", user: "smallcutecats" }
];

export default function Suggestions() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestions_.map(suggestion => <SuggestionList img={suggestion.img} user={suggestion.user} />)}
        </div>
    )
}