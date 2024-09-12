import React from 'react';

export type BioContextType = {
    tag: string;
    name: string;
    number: string;
    email: string;
    github: string;
    linkedIn: string;
    residency: string;
};

const BioContext = ({ bio }: { bio: BioContextType }) => {
    return (
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-1">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{bio.tag}</h2>
            <hr className="my-4 border-gray-300 dark:border-gray-600" />
            <div className="text-lg text-gray-700 dark:text-gray-300 space-y-2">
                <p><strong>Name: </strong>{bio.name}</p>
                <p><strong>Number: </strong>{bio.number}</p>
                <p><strong>Email: </strong><a href={`mailto:${bio.email}`} className="text-blue-500 hover:underline">{bio.email}</a></p>
                <p><strong>GitHub: </strong><a href={bio.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Profile</a></p>
                <p><strong>LinkedIn: </strong><a href={bio.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn Profile</a></p>
                <p><strong>Residency: </strong>{bio.residency}</p>
            </div>
        </section>
    );
}

export default BioContext;
