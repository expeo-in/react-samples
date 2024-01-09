export default function Greet({ name }) {
  if (name)
    return (
      <div>
        <p>Hi {name}</p>
      </div>
    );
  else
    return (
      <div>
        <p data-testid="greetmsg">Hi user</p>
      </div>
    );
}
