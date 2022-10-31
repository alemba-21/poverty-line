import React from "react";
import { useState } from "react";
import Numbers from "./Numbers";

function PartnersList() {
  const [selectPartner, setSelectPartner] = useState(0);
  const clients = [
    {
      name: "Safaricom",
      logo: "images/SAFLOGO.png",
      url: "https://www.safaricom.com/",
      description:
        "Safaricom PLC is a listed Kenyan mobile network operator headquartered at Safaricom House in Nairobi, Kenya. It is the largest telecommunications provider in Kenya, and one of the most profitable companies in the East and Central Africa region",
    },
    {
      name: "Slack",
      logo: "images/slack.png",
      url: "https://www.tcs.com/",
      description:
        "Slack is a cloud-based set of tools and services that makes it easy to get work done. It’s built for teams of all sizes, and has a simple, beautiful design that’s easy to use and works great on any device.",
    },
    {
      name: "Twitter",
      logo: "images/twitter.png",
      url: "https://www.infosys.com/",
      description:
        "Twitter is a social networking service that enables users to send and read short 140-character messages called “tweets”.",
    },
    {
      name: "Instagram",
      logo: "images/instagram.png",
      url: "https://www.wipro.com/",
      description:
        "Instagram is a photo-sharing, video-sharing and communication service that is owned and operated by Facebook, Inc. It was created by Kevin Systrom and Mike Krieger, and launched in October 2010.",
    },
    {
      name: "Spotify",
      logo: "images/spotify.png",
      url: "https://www.hcl.com/",
      description:
        "Spotify is a music streaming service that offers a wide range of music genres, including rock, pop, country, electronic, and more. It was created by Swedish computer programmer and programmer Johan Liljegren in 2007.",
    },
    {
      name: "Messenger",
      logo: "images/messenger.png",
      url: "https://www.accenture.com/",
      description:
        "Messenger is a messaging app that enables users to communicate with their friends and family. It was created by Facebook in 2011.",
    },
    {
      name: "Cognizant",
      logo: "images/cognizant.png",
      url: "https://www.capgemini.com/",
      description:
        "Cognizant is a multinational technology company headquartered in Bengaluru, India. It is the largest Indian IT company by market capitalization.",
    },
    {
      name: "Github",
      logo: "images/github.png",
      url: "https://www.cognizant.com/",
      description:
        "GitHub is a web-based hosting service for version control of code using the distributed version control (DVCS) model. It was created by Linus Torvalds in 2005.",
    },
  ];
  const next = () => {
    setSelectPartner(selectPartner + 1);
  };
  const previous = () => {
    setSelectPartner(selectPartner - 1);
  };
  return (
    <div>
      <div className="bg-black h-44 rounded-b-full"></div>
      <div className="flex justify-center -mt-44 items-end space-x-10 overflow-x-hidden">
        {selectPartner !== 0 && (
          <i
            className="ri-arrow-left-line text-4xl text-green-800 cursor-pointer"
            onClick={previous}
          ></i>
        )}

        <div className="grid grid-cols-3 gap-10">
          {[
            clients[selectPartner],
            clients[selectPartner + 1],
            clients[selectPartner + 2],
          ].map((item) => (
            <div className="bg-white shadow p-5 w-[400px] border h-[350]">
              <div className="flex space-x-10 items-center justify-evenly">
                <img className="h-32 w-32 z-20" src={item.logo} alt="" />
                <h1 className="text-black font-semibold text-2xl">
                  {item.name}
                </h1>
              </div>
              <p className="text-gray-600 text-md mt-10">{item.description}</p>
            </div>
          ))}
        </div>
        {selectPartner < 4 && (
          <i
            className="ri-arrow-right-line text-4xl text-green-800 cursor-pointer "
            onClick={next}
          ></i>
        )}
      </div>
      <div className="flex justify-center mt-10">
        <div className="flex space-x-2">
          {[1, 2, 3, 4,5].map((item, index) => (
            <div
            onClick={()=>setSelectPartner(index)}
              className={`bg-gray-200 h-4 w-4 rounded-full cursor-pointer hover:scale-105 transition-all transform duration-300 ${
                selectPartner === index && "border-2 border-orange-500 h-5 w-5"
              }`}
            ></div>
          ))}
        </div>
      </div>
      <Numbers/>
    </div>
  );
}

export default PartnersList;
