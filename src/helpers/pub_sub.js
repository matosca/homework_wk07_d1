const PubSub = {
  publish: (channel, payload) => {
    console.log(`Publish on channel: ${channel}. Payload: ${payload}`);
    const event = new CustomEvent(channel, { detail: payload });
    document.dispatchEvent(event);
  },

  subscribe: (channel, callback) => {
    console.log(`Subscribed to channel: ${channel}`);
    document.addEventListener(channel, callback);
  }
};
module.exports = PubSub;
