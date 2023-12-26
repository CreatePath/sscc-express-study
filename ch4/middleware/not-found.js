const notFound = (req, res) => res.status(404).json({ message: `${req.method} ${req.url} 라우터가 없습니다.` });

module.exports = notFound;