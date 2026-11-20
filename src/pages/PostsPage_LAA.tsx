import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../api/posts';

const PostsPage_LAA = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts().then(res => res.data),
  });

  if (isLoading) return <h1>Posts loading...</h1>;
  if (error) return <h1>Error loading posts</h1>;

  return (
    <section id="center">
      <div>
        <h1>Posts list</h1>
      </div>
      <div className='usersContainer'>
        {posts?.map((post) => (
          <div key={post.id} className='userCard'>
            <div>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <small>Created: {new Date(post.createdAt).toLocaleDateString()}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostsPage_LAA;
