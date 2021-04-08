import { Schema } from 'mongoose';
import mongoose from '../database';

const serviceSchema = new Schema({
  name: Schema.Types.String,
  details: Schema.Types.Array,
});

const Service = mongoose.model('services', serviceSchema);

export default Service;
