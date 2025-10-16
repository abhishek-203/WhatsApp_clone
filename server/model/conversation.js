import mongoose from "mongoose";

const ConversationSchema = mongoose.Schema(
  {
    members: {
      type: Array,
    },
    message: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

const conversation = mongoose.model("conversation", ConversationSchema);

export default ConversationSchema;

