import Conversation from "../model/conversation.js";

const newconversation = async (req, res) => {
  try {
    const senderid = req.body.senderid;
    const receiverId = req.body.receiverId;

    const exist = await Conversation.findOne({
      member: { $all: [receiverId, senderid] },
    });

    if (exist) {
      return res.status(200).json("Conversation already exists ");
    }

    const newConversation = new Conversation({
      member: [senderid, receiverId],
    });

    await newConversation.save();
    await res.status(200).json("Conversation saved successfully ");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export default newconversation;
