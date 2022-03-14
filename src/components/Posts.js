import Post from "./Post";

const posts_ = [
{topImage: "./assets/img/meowed.svg", topUser: "barked", postImage: "./assets/img/gato-telefone.svg",
bottomImage: "./assets/img/respondeai.svg", bottomUser: "respondeai", likes: "323.323"},
{topImage: "./assets/img/barked.svg", topUser: "meowed", postImage: "./assets/img/dog.svg",
bottomImage: "./assets/img/adorable_animals.svg", bottomUser: "adorable_animals", likes: "666"}
]

export default function Posts() {
    return (
    <div class="posts">
      {posts_.map(post =>
      <Post 
      topImage={post.topImage} 
      topUser={post.topUser} 
      postImage={post.postImage}
      bottomImage={post.bottomImage} 
      bottomUser={post.bottomUser} 
      likes={post.likes} />
      )}      
    </div>
    )
}