const User = require("../model/user");
const userStorage = require("../data/user");

class UserController {
    static registerUser(req, res) {
        if (UserController.findIdx(req.body.id)) {
            return res.status(400).json({ message: "해당 id가 이미 존재합니다." });
        }

        const user = new User(req.body.id, req.body.pw);
        userStorage.push(user);

        return res.status(201).json(user);
    }

    static findIdx(id) {
       for (let i = 0; i < userStorage.length; i++) {
            if (id == userStorage[i].id) {
                return { idx: i, user: userStorage[i] };
            }
        }
        return null;
    }

    static findUser(req, res) {
        const findResult = UserController.findIdx(req.params.id);

        if(!findResult)
            return res.status(404).json({ message: "해당 사용자를 찾을 수 없습니다." });

        return res.json(findResult.user);
    }

    static updatePw(req, res) {
        let findResult = UserController.findIdx(req.body.id);
        if (!findResult) {
            return res.status(404).json({ message: "해당 사용자를 찾을 수 없습니다." });
        }

        findResult.user.pw = req.body.pw;
        return res.json(findResult.user);
    }

    static deleteUser(req, res) {
        let findResult = UserController.findIdx(req.params.id);
        if (!findResult) {
            return res.status(404).json({ message: "해당 사용자를 찾을 수 없습니다." });
        }

        userStorage.pop(findResult.idx);

        return res.json({ message: "삭제되었습니다." });
    }
}

module.exports = UserController;