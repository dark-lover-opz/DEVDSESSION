import "dotenv/config";

const config = {
    sessionTimeout: parseInt(process.env.SESSION_TIMEOUT || "604800"), // 7 days
    databaseUrl: process.env.DATABASE_URL || "",
    encryptionKey: process.env.ENCRYPTION_KEY || "",
    port: parseInt(process.env.PORT || "8000"),
    prefix: process.env.PREFIX || "DEVD",
};

export default Object.freeze(config);
