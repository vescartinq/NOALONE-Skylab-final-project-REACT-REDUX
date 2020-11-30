import React from 'react';

function ListScreen() {
  return (
    <div>
      <div className="row center">
        {products.map((challenge) => (
          <ChallengeCard key={challenge._id} challenge={challenge} />
        ))}
      </div>
    </div>
  );
}

export default ListScreen;
