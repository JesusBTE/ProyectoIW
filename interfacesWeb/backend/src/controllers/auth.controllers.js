import User from '../models/user.model.js';//Estamos exportando el modelo "Tabla" en donde se guadaran los usuarios
import bcrypt from 'bcryptjs'; // esto nos va a servir para poder encriptar la contraseña
import jwt from 'jsonwebtoken';//Con esto crearemos el token una vez que un usuario se haya logueado
import {createAccessToken} from '../libs/jwt.js'

export const register = async (req, res) => {
    const {username, email, password} = req.body;
    
    try{

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: passwordHash, //Le pasamos el valor del hash
        });
    
        const userSaved = await newUser.save();//Con esto ya se esta guardando el usuario en la base de datos
        
        const token = await createAccessToken({id: userSaved._id});

        res.cookie('token', token);
        //res.json({ message : "Usuario creado satisfactoriamente"});
        
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
        });//Creamos esa nueva variable para que me devuelva al usuario con su fecha de creacion y edicion, ya que si hubieramos puesta ahi la variable newUser, solo devolveria los datos ingresados
    }catch(error){
        console.log(error);
    }

};

export const login = (req, res) => {
    res.send('login');
};