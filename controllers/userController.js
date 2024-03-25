const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
exports.geAllUsers = async (req, res) => {
    try {
        const {name, phoneNumber} = req.body;
        const user = await prisma.user.findMany({});
        res.json(user);
    } catch (err) {
        console.error('Error creating activity:', err);
        res.status(500).json({ err: 'Internal Server Error' });
    }
}

exports.addUser = async (req, res) => {
    try {
        const {name, phoneNumber, password, role} = req.body;
        const user = await prisma.user.create({
            data: {
                name,
                phone_number,
                password, 
                roles: {
                    connectOrCreate: role.map(role => ({
                        where: {name: role.name},
                        create: {name: role.name}
                    }))
                },
                include: {
                    roles: true
                }
            }    
        });
        res.json(user);
    } catch (err) {
        console.error('Error creating activity:', err);
        res.status(500).json({ err: 'Internal Server Error' });
    }
}