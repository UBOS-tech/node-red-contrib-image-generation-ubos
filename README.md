## node-red-contrib-image-generation-ubos

A Node-RED node that interacts with OpenAI machine learning models to generate image outputs like 'DALL·E 2'.

<img width="100%"  alt="Ubos - End-to-End Software Development Platform" src="https://ubos.tech/wp-content/uploads/2023/03/cropped-Group-21015-1.png">

<h3 align="center">
  <b><a href="https://ubos.tech/">UBOS</a></b>
  •
  <a href="https://community.ubos.tech/">Community</a>
  •
  <a href="https://www.youtube.com/@ubos_tech">Youtube</a>
  •
  <a href="https://discord.com/invite/dt59QaptH2">Discord</a>
  •
  <a href="https://github.com/UBOS-tech">GitHub</a>
</h3>

### Quick Start

Install with the built in <b>Node-RED Palette manager</b> or using npm:
```
npm install node-red-contrib-image-generation-ubos
```

## Setup

When editing the nodes properties, to get your `OPENAI_API_KEY` log in to [ChatGPT](https://chat.openai.com/chat) and then visit https://platform.openai.com/account/api-keys click "+ Create new secret key" then copy and paste the "API key" into the nodes `API_KEY` property value.

To get your `Organization` visit https://platform.openai.com/account/org-settings then copy and paste the "OrganizationID" into the nodes `Organization` property value.

## Properties

 - `msg.OPENAI_API_KEY`: This is the API key provided by OpenAI. It is necessary for authentication when making requests to the OpenAI API. **(Required)**

 - `msg.prompt`: A text description of the desired image(s). The maximum length is 1000 characters. **(Required)**
 - `msg.n`: The number of images to generate. Must be between 1 and 10.
 - `msg.size`: The size of the generated images. Must be one of ***256x256***, ***512x512***, or ***1024x1024***.
 - `msg.response_format`: The format in which the generated images are returned. Must be one of ***url*** or ***b64_json***.
 - `msg.user`: A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](https://platform.openai.com/docs/guides/safety-best-practices/end-user-ids)

## Demo

<img width="1440" alt="image" src="https://github.com/UBOS-tech/node-red-contrib-image-generation-ubos/assets/41735477/5b45a32f-5d3b-4507-a107-636f5c94dd16">

### Bugs reports and feature requests

Please report any issues or feature requests at <a href="https://github.com/UBOS-tech/node-red-contrib-image-generation-ubos/issues">GitHub</a>.

## License

[MIT License](https://github.com/UBOS-tech/node-red-contrib-image-generation-ubos/blob/main/LICENSE)
