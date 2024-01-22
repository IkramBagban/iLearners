import { UserCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const chatData = [
  {
    userName: "Alice Johnson",
    messagePreview: "Hey, are we still meeting tomorrow?",
    timestamp: "10:30 AM",
    unreadMessages: 2,
  },
  {
    userName: "Bob Smith",
    messagePreview: "Can you send me the report?",
    timestamp: "Yesterday",
    unreadMessages: 1,
  },
  {
    userName: "Charlie Brown",
    messagePreview: "That sounds great, thank you!",
    timestamp: "Yesterday",
    unreadMessages: 0,
  },
  {
    userName: "Diana Prince",
    messagePreview: "I’ve attached the files you asked for.",
    timestamp: "Jan 15",
    unreadMessages: 0,
  },
];


const Chats = () => {
    return (
      <div className="divide-y divide-gray-300">
        {chatData.map((chat, index) => (
          <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <UserCircleIcon className="h-10 w-10 text-gray-500" />
              <div className="flex flex-col">
                <h3 className="font-medium">{chat.userName}</h3>
                <h6 className="text-sm text-gray-600">{chat.messagePreview}</h6>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-xs text-gray-500">{chat.timestamp}</div>
              {chat.unreadMessages > 0 && (
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-600 text-white text-xs">
                  {chat.unreadMessages}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
export default Chats;
