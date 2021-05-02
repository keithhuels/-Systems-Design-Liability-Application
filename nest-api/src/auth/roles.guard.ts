import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './role.enum';
import { ROLES_KEY } from './roles.decorator';
import jwt_decode from "jwt-decode";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {
  }

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass()
    ]);

    if (!requiredRoles) {
      return true;
    }

    const user = context.switchToHttp().getRequest();
    const token = user.headers.authorization;
    if (!token) {
      return false;
    }

    const decodedToken: any = jwt_decode(token);
    if (!decodedToken) {
      return false;
    }
    return requiredRoles.some((role) => decodedToken.roles.includes(role));
  }
}
