import Story from "./Story";

const stories = [
    { user: "9gag", img: "./assets/img/9gag.svg" },
    { user: "meowed", img: "./assets/img/meowed.svg" },
    { user: "barked", img: "./assets/img/barked.svg" },
    { user: "nathanwpylestrangeplanet", img: "./assets/img/nathanwpylestrangeplanet.svg" },
    { user: "wawawicomics", img: "./assets/img/wawawicomics.svg" },
    { user: "respondeai", img: "./assets/img/respondeai.svg" },
    { user: "filomoderna", img: "./assets/img/filomoderna.svg" },
    { user: "memeriagourmet", img: "./assets/img/memeriagourmet.svg" }
];

export default function Stories() {
    return (
        <div class="stories">
            {stories.map(story => <Story img={story.img} user={story.user} />)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>

    )
}

