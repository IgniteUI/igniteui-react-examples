import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./ChatStyling.css";
import {
  ChatMessageRenderContext,
  IgrAvatar,
  IgrChat,
  IgrChatOptions
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function ChatStyling() {
  const [draftMessage, setDraftMessage] = useState(null);

  let initialMessages = [
    {
      id: '1',
      text: `Hi, I have a question about my recent order, #7890.`,
      sender: 'user',
      timestamp: (Date.now() - 3500000).toString()
    },
    {
      id: '2',
      text: `Hello! I can help with that. What is your question regarding order #7890?`,
      sender: 'support',
      timestamp: (Date.now() - 3400000).toString()
    },
    {
      id: '3',
      text: `The tracking status shows 'delivered', but I haven't received it yet. Can you confirm the delivery location?`,
      sender: 'user',
      timestamp: (Date.now() - 3300000).toString()
    },
    {
      id: '4',
      text: `I've reviewed the delivery details. It seems the package was left in a different spot. Here's a photo from our delivery driver showing where it was placed. Please check your porch and side door.`,
      sender: 'support',
      timestamp: (Date.now() - 3200000).toString(),
      attachments: [
        {
          id: 'delivery-location-image',
          name: 'Delivery location',
          url: 'https://media.istockphoto.com/id/1207972183/photo/merchandise-delivery-from-online-ordering.jpg?s=612x612&w=0&k=20&c=cGcMqd_8FALv4Tueh7sllYZuDXurkfkqoJf6IAIWhJk=',
          type: 'image'
        },
      ],
    },
  ];
  const [messages, setMessages] = useState(initialMessages);

  let messageHeader = ({ message }: ChatMessageRenderContext) => {
    return message.sender !== 'user'
      ? <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
          <IgrAvatar
            shape='circle'
            src="https://dl.infragistics.com/x/img/people/men/11.png"
            style={{position: "relative"}}
          >
          </IgrAvatar>
          <span
            style={{color: "#c00000", fontWeight: "bold", margin: "8px"}}
            >Customer Support</span
          >
        </div>
      : null;
  };

  const [options, setOptions] = useState<IgrChatOptions>({
    disableAutoScroll: false,
    disableInputAttachments: false,
    suggestions: [`It's there. Thanks.`, `It's not there.`],
    inputPlaceholder: 'Type your message here...',
    headerText: 'Customer Support',
    renderers: {
      messageHeader
    }
  });

  // TODO: Check why this is not available in WC Styling Sample
  function onMessageCreated(e: any): void {
    e.preventDefault();

    const newMessage = e.detail;
    setMessages(prev => [...prev, newMessage]);
    setOptions(prev => ({ ...prev, isTyping: true, suggestions: [] }));


    const messageText = e.detail.text.toLowerCase();
    const responseText = messageText.includes('not there') 
      ? `We're sorry to hear that. Checking with the delivery service for more details.`
      : messageText.includes('it\'s there') 
        ? `Glad to hear that! If you have any more questions or need further assistance, feel free to ask. We're here to help!`
        : `Our support team is currently unavailable. We'll get back to you as soon as possible.`;

    const responseMessage = {
      id: Date.now().toString(),
      text: responseText,
      sender: 'support',
      timestamp: Date.now().toString(),
    };

    setDraftMessage({ text: '', attachments: [] });
    setMessages(prev => [...prev, responseMessage]);
    setOptions(prev => ({ ...prev, isTyping: false }));
  }

  return (
    <div className="container sample center">
      <div className="chat-wrapper">
        <IgrChat
          messages={messages}
          options={options}
          draftMessage={draftMessage}
          onMessageCreated={onMessageCreated}
        ></IgrChat>
      </div>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ChatStyling />);
