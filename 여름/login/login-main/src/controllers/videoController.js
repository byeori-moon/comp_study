import Video from "../models/video";

export const home = async (req, res) => {
    const videos = await Video.find({},);
    return res.render("home", { pageTitle: "Home", videos })
};
export const watch = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id)
    if (!video) {
        return res.render("404", { pageTitle: "Video not found." })
    };
    return res.render("watch", { pageTitle: video.title, video });
};
export const getEdit = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    if (!video) {
        res.render("404", { pageTitle: "Video not found." })
    }
    res.render("edit", { pageTitle: `Edit : ${video.title}`, video });
}
export const postEdit = async (req, res) => {
    const { id } = req.params;
    const { title, description, hashtags } = req.body;
    const video = await Video.findById(id);
    if (!video) {
        res.render("404", { pageTitle: "Video not found." })
    }
    video.title = title;
    video.description = description;
    video.hashtags = hashtags.split(",").map((word) => !word.trim().startsWith("#") ? `#${word.trim()}` : word.trim());
    await video.save();
    return res.redirect(`/videos/${id}`)
}
////////////////////////////////////////////////
export const getUpload = (req, res) => {
    return res.render("upload", { pageTitle: `Upload Video` })
};
export const postUpload = async (req, res) => {
    // here we will add a video to the videos array.
    const { title, description, hashtags } = req.body;
    try {
        await Video.create({
            title,
            description,
            hashtags: hashtags.split(",").map((word) => !word.trim().startsWith("#") ? `#${word.trim()}` : word.trim()),
        });
        return res.redirect("/")
    } catch (error) {
        return res.render("upload", {
            pageTitle: "Upload Video",
            errorMessage: error._message,
        })
    };
}