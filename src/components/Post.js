import Top from "./Top";
import Content from "./Content";
import Background from "./Background";


export default function Post(props) {
  const {topImage, topUser, postImage, bottomImage, bottomUser, likes} = props;
return (
<div class="post">
  <Top img={topImage} user={topUser} />
  <Content img={postImage} />
  <Background img={bottomImage} user={bottomUser} likes={likes} />
</div>
)
}