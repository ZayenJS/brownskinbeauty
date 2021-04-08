import { Schema } from 'mongoose';
import mongoose from '../database';

const pageSchema = new Schema({
  name: Schema.Types.String,
});

const Page = mongoose.model('pages', pageSchema);

export default Page;
