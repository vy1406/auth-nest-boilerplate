import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { users as mockUsers } from '../users/mock';

@Injectable()
export class UsersService {

    async findOne(username: string): Promise<User | undefined> {
        return mockUsers.find(user => user.username === username);
    }
}
