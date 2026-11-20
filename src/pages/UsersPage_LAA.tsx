import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../api/users';

const DUMMY_PICTURE = 'https://thumbs.dreamstime.com/b/none-102846161.jpg?w=768';

const UsersPage_LAA = () => {
  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers().then(res => res.data),
  });

  if (isLoading) return <h1>Users list loading...</h1>;
  if (error) return <h1>Error loading users</h1>;

  return (
    <section id="center">
      <div>
        <h1>Users list</h1>
      </div>
      <div className='usersContainer'>
        {users?.map((user) => (
          <div key={user.id} className='userCard'>
            <div>{user.firstName} {user.lastName}</div>
            <div>
              {user.avatar?.map((avt) => (
                <img key={avt.uid} height={100} width={100} src={DUMMY_PICTURE} />)
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UsersPage_LAA;
