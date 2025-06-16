# DEVDSESSION

DEVDSESSION is a WhatsApp session generator site/API for [Baileys](https://github.com/WhiskeySockets/Baileys) WhatsApp bots.

## Usage

To get a WhatsApp session, visit the site to link your device. Once completed, a session ID will be generated and sent to your WhatsApp. Use this ID to fetch the session file from the server.

[Example](examples/get-session.js)

## Customization

You can customize the site backend for your bot by editing the environment variables:

```.env
PORT=8000 # Port the server runs on
PREFIX=DEVD // prefix on session id
DATABASE_URL="redis://username:password@host:port" # Redis database URL (required)
SESSION_TIMEOUT= # Duration an idle session lasts on the server
ENCRYPTION_KEY= # Encryption key (must be 32 bytes long base64 buffer required) generate using crypto.randomBytes(32).toString("base64")
```

## API

-   **POST** `/api/session/:sessionId/reset` — Refresh a session.  
    Call this endpoint periodically to keep a session active.

-   **POST** `/api/session/:sessionId` — Retrieve the session file for a given session ID.  
    Use this endpoint to download the session data after linking your device. - [Example](examples/get-session.js)

## Run Application

Run the following commands to run the application

```sh
git clone https://github.com/DannyAkintunde/DEVDSESSION.git
cd DEVDSESSION
npm install
npm run build
npm run serve
```

### Development

```sh
npm run dev
```

### Deploy with Docker

```sh
docker pull ghcr.io/dannyakintunde/devdsession:latest
```

## Design

<div align="center">
    <img src="https://github.com/user-attachments/assets/73c30261-8cfa-4a24-8ce3-16758e292a3b" alt="Figma Design" width="600"/>
</div>

[View the Figma Design](https://www.figma.com/design/iNnir9J4Y4UOEceiWxZZLO/DEVD-Session?node-id=0-1&t=RZyBPYzolON1qwLN-1)

## 🧩 Wireframes

Below are the initial wireframes for the DEVDSESSION web app:

- [Pair code Wireframe](https://wireframe.cc/Oez5Hr)
- [Qr Wireframe](https://wireframe.cc/D4kE0D)


# License

This project is licensed under the MIT license read the [License](LICENSE)
