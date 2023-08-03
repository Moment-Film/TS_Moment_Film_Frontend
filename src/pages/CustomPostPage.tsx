import { useEffect, useState } from 'react'
import { posts } from '../api/mockData'
import Post from '../components/customPostPage/Post'
import { PostWrapper } from '../components/customPostPage/style'
import { getAllPosts } from '../api/post'

const CustomPostPage: React.FC = () => {
  // const [getPosts, setGetPosts] = useState([]);
  const getPost = posts;

  useEffect(() => {
    // setGetPosts(getAllPosts());
  }, [])
  return (
    <PostWrapper>
      {
        getPost.map(item => {
          return <Post key={item.id}
            id={item.id}
            images={item.images}
            filterId={item.filterId}
            frameId={item.frameId}
            commentCnt={item.commentCnt}
            likeCnt={item.likeCnt}
            viewCnt={item.viewCnt}></Post>
        })
      }
    </PostWrapper>
  )
}

export default CustomPostPage