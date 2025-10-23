import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./ChatFeatures.css";
import {
  ChatMessageRenderContext,
  IgrChat,
  IgrChatOptions
} from "igniteui-react";
import { createChatMarkdownRenderer } from "igniteui-react/extras";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function ChatFeatures() {
  const [draftMessage, setDraftMessage] = useState(null);

  let initialMessages = [
    {
      id: '1',
      text: `Hello. How can we assist you today?`,
      sender: 'support',
      timestamp: (Date.now() - 3500000).toString()
    },
    {
      id: '2',
      text: `Hello. I have problem with styling IgcAvatarComponent. Can you take a look at the attached file and help me?`,
      sender: 'user',
      timestamp: (Date.now() - 3400000).toString(),
      attachments: [
        {
          id: 'AvatarStyles.css',
          name: 'AvatarStyles.css',
          url: './styles/AvatarStyles.css',
          type: 'text/css'
        },
      ],
    },
    {
      id: '3',
      text: `Sure, give me a moment to check the file.`,
      sender: 'support',
      timestamp: (Date.now() - 3300000).toString()
    },
    {
      id: '4',
      text: 
      `
Thank you for your patience. It seems that the issue is the name of the CSS part. Here is the fixed code:
\`\`\`css
igc-avatar::part(base) {
  --size: 60px;
  color: var(--ig-success-500-contrast);
  background: var(--ig-success-500);
  border-radius: 20px;
}
\`\`\`
      `,
      sender: 'support',
      timestamp: (Date.now() - 3200000).toString()
    }
  ];
  const [messages, setMessages] = useState(initialMessages);

  let messageHeader = ({ message }: ChatMessageRenderContext) => {
    return message.sender !== 'user'
      ? <div>
          <span
            style={{ color: "#c00000", fontWeight: "bold" }}
            >Developer Support</span
          >
        </div>
      : null;
  };

  let suggestionPrefix = () => {
    return <span style={{ fontWeight: "bold" }}>💡</span>;
  };

  const [options, setOptions] = useState<IgrChatOptions>({
    disableAutoScroll: false,
    disableInputAttachments: false,
    inputPlaceholder: 'Type your message here...',
    headerText: 'Developer Support',
    suggestionsPosition: "below-input",
    renderers: {
      messageHeader,
      suggestionPrefix
    },
    suggestions: [ 'Send me an e-mail when support is available.' ]
  });

  useEffect(() => {
    let mounted = true;
    createChatMarkdownRenderer().then(renderer => {
      if (!mounted) return;

      setOptions((prev: any) => ({
        ...prev,
        renderers: {
          ...prev.renderers,
          messageContent: async (ctx: any) => await renderer(ctx.message),
        }
      }));
    });
    return () => { mounted = false; };
  }, []);

  function onMessageCreated(e: any): void {
    e.preventDefault();

    const newMessage = e.detail;
    setMessages(prev => [...prev, newMessage]);
    setOptions((prev: any) => ({ ...prev, isTyping: true, suggestions: [] }));

    const responseMessage = {
      id: Date.now().toString(),
      text: 'Our support team is currently unavailable. We\'ll get back to you as soon as possible.',
      sender: 'support',
      timestamp: Date.now().toString()
    };

    setDraftMessage({ text: '', attachments: [] });
    setMessages(prev => [...prev, responseMessage]);
    setOptions((prev: any) => ({ ...prev, isTyping: false }));
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
root.render(<ChatFeatures />);
