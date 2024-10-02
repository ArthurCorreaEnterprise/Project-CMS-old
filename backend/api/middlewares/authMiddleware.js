const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Pega o token do cabeçalho
    if (!token) return res.status(403).json({ error: 'Token não fornecido.' });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ error: 'Token inválido.' });
        req.userId = decoded.id; // Salva o ID do usuário no request
        next(); // Passa para o próximo middleware
    });
};

module.exports = authMiddleware;
