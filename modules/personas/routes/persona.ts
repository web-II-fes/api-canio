import * as express from 'express';
import { personaSchema } from './../schemas/persona';
import { resolve } from 'path';
import { getMenores } from './../controllers/personaCtrl';

const router = express.Router();

router.get('/persona', async (req, res, next) => {
    
	personaSchema.find(function(err, persona) {
		if (err){
      return err;
    } 
		res.send(persona);
	});
});

router.get("/personaId/:id", async (req, res) => {
  let idPersona = req.params.id;
  try {
    let personas = await personaSchema.findById(idPersona);
    res.send(personas);
  } catch (err) {
    throw err;
  }
});


router.post('/persona', (req, res) => {
  
  const persona = new personaSchema(req.body);
  persona.save(function(err, persona){
    if (err) {
      return err;
    }
    res.json(persona);
  });
});



router.put('/persona/:_id', (req, res, next) => {

  personaSchema.findByIdAndUpdate(req.params._id, req.body, { new : true}, (err, persona) => {
    if (err){
      return err;
    }

    return res.send(persona);
  });
});


router.delete('/persona/:_id', (req, res, next) => {
  
  personaSchema.findByIdAndRemove(req.params._id, (err, persona) => {
    if (err) {
      console.log('Error: ', err);
    }
    console.log('Persona eliminada: ', persona);
  });
});


export = router;
