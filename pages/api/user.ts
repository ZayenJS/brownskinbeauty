import User from '../../models/User';

export default async (req, res) => {
  const users = await User.find();
  res.status(200).json({ users });
};
