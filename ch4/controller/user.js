const User = require("../models/user");
const ErrorResponse = require("../errors/error-response");
const { Op } = require("sequelize");
const { user2json } = require("../utils/util");

class UserController {
    static async register(req, res) {
        const {name, studentId, nickname, password, comment} = req.body;

        if (!name || !studentId || !nickname || !password)
            return ErrorResponse.wrongFormat(res);

        const foundUser = await User.findOne({
            where: { [Op.or]: [{ studentId }, { name }] }
        });

        if (foundUser)
            return ErrorResponse.isConflict(res, "이미 가입하셨습니다.");

        const user = await User.create({
            name, 
            studentId, 
            nickname, 
            password, 
            comment
        });

        return res.status(201).json(user2json(user));
    }

    static async findUserById(req, res) {
       const user = await User.findOne({
        where: { id: req.params.id }
       });

       if (!user) 
        return ErrorResponse.NotFound(res, "해당 유저를 찾을 수 없습니다.");

       return res.json(user2json(user));
    }

    static async updatePassword(req, res) {
        const user = await User.update(
            { password: req.body.password }, 
            { where: {id: req.params.id} }
        );

        if (user[0] === 0)
            return ErrorResponse.wrongRequest(res, "비밀번호 수정에 실패하였습니다.");

        return res.json({ message: "비밀번호가 수정되었습니다."});
    }

    static async deleteUser(req, res) {
        const result = await User.destroy(
            { where: {id: req.params.id }},
        );

        if (result === 0)
            return ErrorResponse.wrongRequest(res, "계정 삭제에 실패하였습니다.");

        return res.json({ message: "계정이 삭제되었습니다." });
    }
}

module.exports = UserController;