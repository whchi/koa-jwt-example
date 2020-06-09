import { mongoose } from '../connector';

const schema = mongoose.Schema({
  account: { type: String, index: { unique: true } },
  password: { type: String, index: { unique: false } },
  created_at: { type: Date, default: Date.now() },
});

export default mongoose.model('Account', schema);
