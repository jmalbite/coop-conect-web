export interface MemberInterface {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  contactNumber: string;
  member: boolean;
  active: boolean;
  contributionPerMonth: string;
  role: MemberRole;
}

export interface MemberRole {
  roleName: string;
}
