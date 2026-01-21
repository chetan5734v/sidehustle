function Signup() {
  return (
    <div className="signin-container">
      <h2>Sign Up</h2>

      <form>
        <div>
          <label>Username</label><br />
          <input type="text" />
        </div>

        <div>
          <label>Password</label><br />
          <input type="password" />
        </div>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
