import { Test, TestingModule } from '@nestjs/testing';
// import axios from 'axios';

import { GLOBAL_CONFIG } from 'src/configs/global.config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

const URL = `${GLOBAL_CONFIG.nest.url}:${GLOBAL_CONFIG.nest.port}`;

describe('AuthController', () => {
  let _app: TestingModule;

  beforeAll(async () => {
    _app = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();
  });

  // describe('The router', () => {
  //   test('The login route with the user', async () => {
  //     const res = await axios.post(`${URL}/login`, {
  //       email: 'jane@email.com',
  //       password: 'Jane123'
  //     })
  //     expect(res.status).toBe(200)
  //     expect(res.data).toEqual('Welcome jane@email.com')
  //   });

  // test('The login route with the wrong user', async () => {
  //   try {
  //     await axios.post(`${url}/login`, {
  //       username: 'john@email.com',
  //       password: 'john123'
  //     })

  //   } catch (error) {
  //     expect(error.response.status).toBe(404)
  //     expect(error.message).toEqual(
  //       'Request failed with status code 404'
  //     )
  //   }
  // })
  // })

});
