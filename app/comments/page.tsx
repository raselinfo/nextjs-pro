import Comments from '@/components/Comments';
import getComments from '@/lib/getComments';
import React from 'react';

const page = () => {
    const commentsPromise= getComments(1)


    return (
      <div>
        <h1>Comments</h1>
        <Comments commentsPromise={commentsPromise} />
      </div>
    );
};

export default page;


