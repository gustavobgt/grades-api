import mongoose from 'mongoose';

export default (mongoose) => {
  const schema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0)
          throw new Error('Valor negativo para o value não permitido');
      },
    },
  });

  const gradeModel = mongoose.model('grades', schema, 'grades');
  return gradeModel;
};
