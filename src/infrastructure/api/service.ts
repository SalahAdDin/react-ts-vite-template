import client from "./client";

const getSomething = async () => client.get("");

const service = { getSomething };

export default service;
