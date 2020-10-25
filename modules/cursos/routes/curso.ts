import * as express from 'express';
import { cursoSchema } from '../schemas/curso';

const router = express.Router();

router.get('/curso', async (req, res) => {
  
    try {
        let cursos = await cursoSchema.find();
        res.send(cursos);
    } catch (err) {
      throw err;
    }
    
});

router.post('/curso', async (req, res) => {

    try {
      const curso = new cursoSchema(req.body);
      let cursoNuevo = await curso.save();

      res.send(cursoNuevo);
    } catch (err) {
        throw err;
      }
});

router.put('/curso/:_id', (req, res, next) => {

  cursoSchema.findByIdAndUpdate(req.params._id, req.body, { new : true}, (err, curso) => {
    if (err){
      return err;
    }

    return res.send(curso);
  });
});


router.delete('/curso/:_id', (req, res, next) => {
  
  cursoSchema.findByIdAndRemove(req.params._id, (err, curso) => {
    if (err) {
      console.log('Error: ', err);
    }
    res.json(curso);
  });
});


export = router;