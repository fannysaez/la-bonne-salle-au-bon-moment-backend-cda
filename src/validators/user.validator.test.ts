import { describe, it, expect } from 'vitest';
import { createUserSchema } from './user.validator.ts';
describe('createUserSchema', () => {
  it('valide un utilisateur correct', () => {
    const { error } = createUserSchema.validate({
      lastname: 'Saez',
      firstname: 'Fanny',
      email: 'fanny@example.com',
      password: 'test1234',
      roleId: '64f1a2b3c4d5e6f7a8b9c0d1'
    });

    expect(error).toBeUndefined();
  });

  it('refuse un email invalide', () => {
    const { error } = createUserSchema.validate({
      lastname: 'Saez',
      firstname: 'Fanny',
      email: 'pas-un-email',
      password: 'test1234',
      roleId: '64f1a2b3c4d5e6f7a8b9c0d1'
    });

    expect(error).toBeDefined();
  });

  it('refuse un mot de passe trop court', () => {
    const { error } = createUserSchema.validate({
      lastname: 'Saez',
      firstname: 'Fanny',
      email: 'fanny@example.com',
      password: 'abc',
      roleId: '64f1a2b3c4d5e6f7a8b9c0d1'
    });

    expect(error).toBeDefined();
  });
});