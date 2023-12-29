import { MemberInterface } from '../../interfaces';
import { CommonStateProps } from './common-properties.interface';

export interface AuthStateInterface extends CommonStateProps {
  member: MemberInterface;
  isLogin: boolean;
  status?: string;
  message?: string;
  statusCode?: number | string;
}
