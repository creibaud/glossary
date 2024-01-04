import mongoose from "mongoose";

let isConnected: boolean = false;

const connectionToDatabase = async () => {
    if (isConnected) {
        console.log("[*] Mongoose connection is already done");
        return;
    } else {
        try {
            await mongoose.connect(process.env.MONGO_URI || "", {
                dbName: "glossary"
            });

            isConnected = true;
            console.log("[+] Mongoose connection is done");
            return;
        } catch (err) {
            console.log(`[-] Mongoose connection is failed: ${err}`);
            isConnected = false;
        }
    }
};

export default connectionToDatabase;