import React from 'react';

interface SmallCardProps {
    className?: string;
    title: string;
    count: number;
}

const SmallCard: React.FC<SmallCardProps> = (props) => {
    return (
        <div className={`h-40 px-5 relative p-5 w-full rounded-lg font-bold ${props.className? props.className:"bg-sky-100 text-sky-500"}`}>
            <h3 className='mb-4 absolute top-5 left-5 right-5 text-lg'>{props.title}</h3>
            <h6 className='text-3xl absolute left-5 right-5 bottom-5'>{props.count}</h6>
        </div>
    )
}

export default SmallCard;