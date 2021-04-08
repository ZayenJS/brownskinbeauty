import mongoose from 'mongoose';

mongoose.connect(
  `mongodb+srv://zayen01:HOPIGotBzbXANjWM@cluster0.31hti.mongodb.net/brownskinbeauty?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
);

export default mongoose;
