class UserService {
  constructor(db) {
    this.db = db;
  }

  /**
   * Create user
   * @param {Object} userData
   * @returns {*} userData ! null
   */
  async createUser(userData) {
    const newUser = await this.db.User.create(userData);
    if (!newUser) return null;
    return newUser;
  }
}

export default UserService;
