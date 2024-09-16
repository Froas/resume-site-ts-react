import React from 'react';
import { ContactInfoType } from './types'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "./ui/Avatar"

  import { PhoneIcon } from '@heroicons/react/24/outline'
  import { MailIcon, MapPinIcon, LinkedinIcon } from 'lucide-react';
  import { GitHubLogoIcon } from '@radix-ui/react-icons';
  import { UserIcon } from 'lucide-react';


const ContactBlock = ({ contact }: { contact: ContactInfoType }) => {

    const { tag, name, number, email, github, linkedIn, residency } = contact;
    return (
        <div className='flex-1 flex flex-col bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 mb-6'>
            <section className="bg-white dark:bg-gray-800 rounded-lg p-4 ">
                <h2 className="text-center text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">{tag}</h2>
                <hr className="my-4 border-gray-300 dark:border-gray-600" />
                <div className="text-lg text-gray-700 dark:text-gray-300 space-y-2">
                    <div className='flex items-center space-x-2'>
                        <UserIcon className="w-5 h-5 "/>
                        <p><strong>{name?.label}: </strong>{name?.value}</p>
                        <Avatar>
                            <AvatarImage src="https://avatars.githubusercontent.com/u/30415650?s=400&u=2fbb9caedb4d5706e0f837e95062ef33c775133a&v=4" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        
                    </div>
                    <div className='flex items-center space-x-2'>
                        <PhoneIcon className="w-5 h-5 "/>
                        <p><strong>{number?.label}: </strong>{number?.value}</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <MailIcon className="w-5 h-5 mt-1"/>
                        <p><strong>{email?.label}: </strong><a href={`mailto:${email?.value}`} className="text-blue-500 hover:underline">{email?.value}</a></p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <GitHubLogoIcon className="w-5 h-5 mt-1"/>
                        <p><strong>{github?.label}: </strong><a href={github?.value} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Profile</a></p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <LinkedinIcon className="w-5 h-5 "/>
                        <p><strong>{linkedIn?.label}: </strong><a href={linkedIn?.value} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn Profile</a></p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <MapPinIcon className="w-5 h-5 "/>
                        <p><strong>{residency?.label}: </strong>{residency?.value}</p>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default ContactBlock;
