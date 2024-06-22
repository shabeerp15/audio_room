import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.STREAM_API_KEY || "ebfvmnjwp597";
const secret = process.env.STREAM_SECRET || "hjpjhtvarkab65bkza3k9qandncthzqyd76gxq8xs4gd33457umfmfpj6r4tbpqj";

export const client = new StreamClient(apiKey, secret);
