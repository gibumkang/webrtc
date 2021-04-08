## Getting started with webRTC

WebRTC is done peer to peer, without the need of a server, reducing the overall cost of establishing a connection with two or more people. Peers can connect via public IP addresses.

#### What is a signaling server?

The signaling server receives and broadcasts different requests such as calls, video streams, etc.

#### What is a stun server?

Each device has its own IP address. The world only sees the IP address of your router. However, your different devices (computer, phone, etc) all have unique IP addresses. You will need to identify the IP address of the device you are using in order to broadcast that information by using a website like whatsmyipaddress. The STUN server is like that website, which can determine your unique IP address.

#### What is a turn server?

When a peer-to-peer connection cannot be established by a signaling server, a turn server is somewhat like a failsafe server that will activate in order to try and establish a server.

#### What is a websocket and how does it relate to webRTC?

It is part of what makes webRTC functional, it can also be used to power signaling servers. In a normal communication over the internet, when an user makes a request, it is sent to a server and ultimately returned as a response in a linear, unidirectional fashion. However, this process is too slow for webRTC. Unlike a traditional request/response, a websocket's relationship is not unidirectional, but bidirectional.
