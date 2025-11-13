
export const uploadFile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(404).json("File not found");
        }

        const fileUrl = `http://localhost:8000/file/${req.file.filename}`;

        res.status(200).json(fileUrl);
    } catch (error) {
        res.status(500).json(error.message);
    }
}
