"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const WhyChooseUs = () => {
  const content = [
    {
      title: "Collaborative Editing",
      description: "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image src="https://plus.unsplash.com/premium_photo-1664194584291-cfc411d05998?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3Ryb25pYyUyMG11c2ljfGVufDB8fDB8fHww" width={300} height={300} className="h-full w-full object-cover" alt="linear board demo" />
        </div>
      ),
    },
    {
      title: "Real time changes",
      description: "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image src="https://images.unsplash.com/photo-1574155267225-3b5423dd45d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVsZWN0cm9uaWMlMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D" width={300} height={300} className="h-full w-full object-cover" alt="linear board demo" />
        </div>
      ),
    },
    {
      title: "Version control",
      description: "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG11c2ljfGVufDB8fDB8fHww" width={300} height={300} className="h-full w-full object-cover" alt="linear board demo" />
        </div>
      ),
    },
    {
      title: "Running out of content",
      description: "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image src="https://plus.unsplash.com/premium_photo-1681396937086-8a28edd8d257?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3VpdGFyfGVufDB8fDB8fHww" width={300} height={300} className="h-full w-full object-cover" alt="linear board demo" />
        </div>
      ),
    },
    {
      title: "Collaborative Editing",
      description: "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2ljfGVufDB8fDB8fHww" width={300} height={300} className="h-full w-full object-cover" alt="linear board demo" />
        </div>
      ),
    },
  ];
  return (
    <div>
      <StickyScroll content={content} />;
    </div>
  );
};

export default WhyChooseUs;
