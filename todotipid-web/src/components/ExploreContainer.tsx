import './ExploreContainer.css';

import { useGetUsersQuery } from '../services/usersApi';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  
  const { data, isSuccess } = useGetUsersQuery();
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      {isSuccess && (
        <div>
          {data.map(user => {
            return <div className="data" key={user.email}>
              <span>{user.email}</span>
              </div>
          })}
        </div>
      )}
    </div>
  );
};

export default ExploreContainer;
