const Music = require("../model/uploads");
class MusicController {
  async createPlaylist(req, res, next) {
    const exists = await Music.exists({
      src: "build/" + req.file.originalname,
    });
    if (exists) {
      const e = new Error("File exists");
      e.status = 400;
      next(e);
    }
    const newPlaylist = new Music({
      name: req.body.songName,
      description: req.body.desSong,
      src: "build/" + req.file.originalname,
      imgSrc: req.body.imgSong,
    });
    newPlaylist
      .save()
      .then(() => {
        console.log("create new playlist success");
      })
      .catch(next);
  }

  APIMusic(req, res, next) {
    Music.find({})
      .then((music) => {
        console.log(music);
        res.json(music);
      })
      .catch(next);
  }
}
module.exports = new MusicController();
