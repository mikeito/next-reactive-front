"use client";

import { useEffect, useRef, useState } from "react";
import { Client, Message } from "@stomp/stompjs";

export const Reactions = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    stompConfig();
  });

  function stompConfig() {
    const client = new Client({
      brokerURL: "ws://localhost:8080/ws",
      // debug: function (str) {
      //   console.log("Debug: " + str);
      // },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    client.onConnect = function (frame) {
      client.subscribe("/all/messages", (message) => {
        console.log(`Received: ${message.body}`);
        setStatus(`${message.body}`);
      });

      // client.publish({
      //   destination: "/app/application",
      //   body: JSON.stringify({
      //     action: "action 1",
      //     status: "CREATING",
      //   }),
      // });
    };

    client.onStompError = function (frame) {
      console.log("Broker reported error: " + frame.headers["message"]);
      console.log("Additional details: " + frame.body);
    };

    client.activate();
  }

  return (
    <div className="text-center">
      <p className="text-2xl font-extralight">Reaction below</p>
      <p>{ status }</p>
    </div>
  );
};
