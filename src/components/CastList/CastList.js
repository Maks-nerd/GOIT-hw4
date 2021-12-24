// Компоненты
import React from 'react';

const CastList = ({ cast, title }) => {
  const PATH_IMG = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      <h3>{title}</h3>
      <ul>
        {cast.map(({ profile_path, department, name, credit_id }) => (
          <li key={credit_id}>
            <div>
              <h4>Имя:</h4>
              <h5>{name}</h5>
              {department && (
                <>
                  <h4>Отдел:</h4>
                  <h5>{department}</h5>
                </>
              )}
              {profile_path && (
                <>
                  <h4>Фото:</h4>
                  <img src={PATH_IMG + profile_path} alt={name} width={100} />
                </>
              )}
            </div>
            <br />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CastList;
