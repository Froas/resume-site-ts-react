import React from 'react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "../components/ui/Avatar"

  import { PhoneIcon } from '@heroicons/react/24/outline'
  import { MailIcon, MapPinIcon, LinkedinIcon } from 'lucide-react';
  import { GitHubLogoIcon } from '@radix-ui/react-icons';
  import { UserIcon } from 'lucide-react';

export type BioContextType = {
    tag: string;
    name: {
        name: string,
        value: string
    };
    number:  {
        number: string,
        value: string
    };
    email:  {
        email: string,
        value: string
    };
    github:  {
        github: string,
        value: string
    };
    linkedIn:  {
        linkedIn: string,
        value: string
    };
    residency:  {
        residency: string,
        country: string,
        prefecture: string,
        city: string
    };
};

const BioContext = ({ bio }: { bio: BioContextType }) => {
    return (
        <div className='bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 mb-6'>
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200">
                <h2 className="text-center text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">{bio.tag}</h2>
                <hr className="my-4 border-gray-300 dark:border-gray-600" />
                <div className="text-lg text-gray-700 dark:text-gray-300 space-y-2">
                    <div className='flex items-center space-x-2'>
                        <UserIcon className="size-5 "/>
                        <p><strong>{bio.name.name}: </strong>{bio.name.value}</p>
                        <Avatar>
                            <AvatarImage src="https://avatars.githubusercontent.com/u/30415650?s=400&u=2fbb9caedb4d5706e0f837e95062ef33c775133a&v=4" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        
                    </div>
                    <div className='flex items-center space-x-2'>
                        <PhoneIcon className="size-5 "/>
                        <p><strong>{bio.number.number}: </strong>{bio.number.value}</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <MailIcon className="size-5 "/>
                        <p><strong>{bio.email.email}: </strong><a href={`mailto:${bio.email.value}`} className="text-blue-500 hover:underline">{bio.email.value}</a></p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <GitHubLogoIcon className="size-5 "/>
                        <p><strong>{bio.github.github}: </strong><a href={bio.github.value} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Profile</a></p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <LinkedinIcon className="size-5 "/>
                        <p><strong>{bio.linkedIn.linkedIn}: </strong><a href={bio.linkedIn.value} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn Profile</a></p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <MapPinIcon className="size-5 "/>
                        <p><strong>{bio.residency.residency}: </strong>{bio.residency.country}, {bio.residency.prefecture}, {bio.residency.city}</p>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default BioContext;
