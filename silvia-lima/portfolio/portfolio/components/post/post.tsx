import styles from "../post/post.module.scss";
import { FiX } from "react-icons/fi";
import { AiOutlineLeft , AiOutlineRight} from "react-icons/ai"
import { BLOG } from "../../mocks/blog";
import { useEffect } from "react"

interface Props {
  post: number;
  resetPost(zero: number): void;
  selectPost(post:number):void;
}

const Post = ({ post , resetPost, selectPost }: Props) => {
  const selectedPost = BLOG.find((element) => element.id === post);
  useEffect(()=>{
    if (selectedPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  },[selectedPost])

  function sendId(zero: number) {
    resetPost(zero);
  }

  function back() {
    post = post - 1;
    console.log(post);
    selectPost(post);
  }
  function foward() {
    post = post + 1;
    console.log(post);
    selectPost(post);
  }

 

  if (selectedPost) {
  
    return (
      <div className={styles.post}>
        <span
          className={styles.close}
          onClick={() => {
            sendId(0);
          }}
        >
          <FiX />
        </span>
        <div className={styles.container}>
          <button className={styles.btn__back} data-amount={`${post}`} onClick={()=> {back()}}><AiOutlineLeft/></button>
          <div className={styles.content}><h3 className={styles.title}>{selectedPost?.title}</h3></div>
          <button className={styles.btn__foward} data-amount={`${post}`} onClick={()=> {foward()}}><AiOutlineRight/></button>
        </div>
      </div>
    );
  } else {

    return <></>;
  }
};

export default Post;
