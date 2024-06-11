const { PrismaClient } = require("@prisma/client");
const bcrypt = require('bcrypt');
const { generateToken } = require('../helpers/token');
const { default: axios } = require("axios");
const prisma = new PrismaClient();

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existUser = await prisma.user.findFirst({
      where: {
        email
      }
    });
    if(!existUser) {
      return res.status(404).json({
        status: false,
        message: 'User tidak ditemukan'
      })
    }

    const validUser = bcrypt.compareSync(password, existUser.password);

    if(!validUser) {
      return res.status(401).json({
        status: false,
        message: 'Password salah'
      })
    }

    const payload = existUser;
    delete payload.password;
    delete payload.createdAt;
    delete payload.updatedAt;
    delete payload.id;

    return res.json({
      status: true,
      message: 'Berhasil login',
      data: {
        token: generateToken(payload)
      }
    })
  } catch (error) {
    next(error);
  }
};

const loginSimat = async (req, res, next) => {
  try {
    const { nim, password } = req.body;

    const response = await axios.post('https://api.unira.ac.id/v1/token', {
      username: nim,
      password
    }, {
      headers: {
        "Content-Type": 'multipart/form-data'
      }
    });

    const response2 = await axios.get('https://api.unira.ac.id/v1/saya', {
      headers: {
        'Authorization': 'Bearer ' + response.data.data.attributes.access
      }
    });

    return res.json({
      status: true,
      message: 'Data berhasil didapatkan',
      data: response2.data
    })

  } catch (error) {
    next(error)
  }
}



const registration = async (req, res, next) => {
  try {
    const body = req.body;
    validateBodyRegist(res, body);
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        username: body.username
      }
    });

    return res.status(201).json({
      status: true,
      message: 'Data user berhasil ditambahkan',
      data: user
    })
  } catch (error) {
    next(error);
  }
};

function validateBodyRegist(res, body) {
  if (body.password == '' || body.password == undefined || body.password == null) {
    return res.status(400).json({
      status: false,
      message: 'Password tidak boleh kosong'
    });
  }
  if (body.email == '' || body.email == undefined || body.email == null) {
    return res.status(400).json({
      status: false,
      message: 'Email tidak boleh kosong'
    });
  }
  if (body.username == '' || body.username == undefined || body.username == null) {
    return res.status(400).json({
      status: false,
      message: 'Username tidak boleh kosong'
    });
  }
}

const saya = async (req, res, next) => {
  try {
    const { token } = req.query;
    console.log(token);
    const validation = decodeToken(token);
    return res.json(validation);
  } catch (error) {
    next(error);
  }
};



module.exports = {
  login,
  saya,
  registration,
  loginSimat
}

