import { notFound } from 'next/navigation';
import React from 'react';

interface PageProps {
    params: {
        id: string;
    };
}

const page = ({ params }: PageProps) => {

    if(params.id === '1') {
        // notFound()
        throw new Error('Not Found')
    }

    return (
        <div>
            <h1>Blog Page is here {params.id}</h1>
        </div>
    );
};

export default page;