"use strict";
var express = require("express");
var persona_1 = require("./../schemas/persona");
var router = express.Router();
router.get('/persona', function (req, res, next) {
    console.log('Viene del get');
    console.log('Entra a personas');
    persona_1.personaSchema.find(function (err, persona) {
        if (err)
            return;
        console.log('Pepe: ', persona);
        res.send(persona);
        // })
        // getPersona()
        // .then((persona) => {
        //   res.json(persona);
        // })
        // .then((persona) => {
        // res.json(persona);
        // })
        // .then((persona) => {
        //   res.json(persona);
        // })
        // .then((persona) => {
        //   res.json(persona);
        // })
        // .catch(err => {
        //   console.log('Error: ', err);
    });
});
function getPersona() {
    return new Promise(function (resolve, reject) {
        var persona = persona_1.personaSchema.find({ nombre: 'Leo' }).exec();
        if (persona) {
            resolve(persona);
        }
        else {
            reject(console.log('No se encontró persona'));
        }
    });
}
router.post('/persona', function (req, res) {
    console.log('Viene persona POST: ', req.body);
    var persona = new persona_1.personaSchema(req.body);
    persona.save(function (err, persona) {
        if (err) {
            return err;
        }
        res.json(persona);
    });
});
// put modifica, delete borra
// router.put('/persona', (req, res) => {
//   console.log('Viene persona persona POST: ', req.body);
//   const persona = new personaSchema(req.body);
//   Callbacks
//   persona.save(function(err, persona) {
//     if (err) {
//       return err;
//     }
//     res.json(persona);
//   });
// });
router.put('/persona/:_id', function (req, res, next) {
    // console.log('Viene del PUT: ', req.body);
    persona_1.personaSchema.findByIdAndUpdate(req.params._id, req.body, { new: true }, function (err, persona) {
        if (err) {
            return err;
        }
        // console.log("Persona nueva: ", persona);
        return res.send(persona);
    });
});
router.delete('/persona/:_id', function (req, res, next) {
    console.log('Viene del DELETE');
    persona_1.personaSchema.findByIdAndRemove(req.params._id, function (err, persona) {
        if (err) {
            console.log('Error: ', err);
        }
        console.log('Persona eliminada: ', persona);
    });
});
module.exports = router;
//# sourceMappingURL=persona.js.map