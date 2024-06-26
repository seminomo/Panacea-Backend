import type { Request } from 'express';

interface User {
  id: string;
  isCoach?: boolean;
  isAdmin?: boolean;
  approvalStatus?:string;
}

interface UserRequest extends Request {
  user?: User;
}

export default UserRequest;
